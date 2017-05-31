import { observable, action, runInAction, computed } from 'mobx';
import _ from 'lodash';
import { feathersClient } from './client';

class Store {

  @observable errors = {};
  @observable entity = {};
  @observable entities = [];
  @observable pagination = {skip:0, total:0, limit:0};
  @observable loading = false;
  @observable redirect = false;


  constructor(serviceName) {
    this.service = feathersClient().service(serviceName);
    this.serviceName = serviceName;
    // Capture Real-time events
    this.service.on('patched', entity => {
      this.updateEvent(entity);
    });
    this.service.on('created', entity => {
      this.addEvent(entity);
    });
    this.service.on('removed', entity => {
      this.removeEvent(entity);
    });
  }

  startAsync = () => {
    this.loading = true;
    this.errors = {};
  }

  @action
  handleErrors = (err) => {
    if( err.code === 400) {
      let messages = [];
      _.each(err.errors, (value, key) => {
        messages.push(value.message);
      })
      this.errors = {global: err.message, messages}
    } else {
      this.errors = {global: err.message}
    }
    this.loading = false;
  }

  @action
  fetchAll = async() => {
    this.startAsync();
    try{
      const query = {$skip:this.pagination.skip}
      const response = await this.service.find({query})
      runInAction('entities fetched', () => {
        this.entities = response.data;
        this.pagination = {
          total : response.total,
          limit: response.limit,
          skip: response.skip
        };
        this.loading = false;
      });
    } catch(err) {
        this.handleErrors(err);
    }
  }

  @computed get pageNumbers() {
    const { total, limit } = this.pagination;
    let skips = [];
    for(let i=0; i<total; i+=limit) {
      skips.push(i);
    }
    return skips.map((skip,index) => ({page:index + 1, skip}));
  }

  @computed get previousPage() {
    const { skip, limit } = this.pagination;
    const prev = skip - limit;
    return prev < 0 ? 0 : prev;
  }

  @computed get nextPage() {
    const { skip, limit, total } = this.pagination;
    const next = skip + limit;
    return next > total ? (total-limit) : next;
  }

  @action
  create = async(entity) => {
    this.startAsync();
    try{
      const response = await this.service.create(entity);
      runInAction('entity created', () => {
        this.entities.push(response);
        this.redirect = true;
        this.loading = false;
      });
    } catch(err) {
        this.handleErrors(err);
    } finally {
      this.redirect = false;
    }
  }

  @action
  newEntity = () => {
    this.entity = {};
    this.errors = {};
  }

  @action
  fetch = async(_id) => {
    this.startAsync();
    try {
      const response = await this.service.get(_id)
      runInAction('entity fetched', () => {
        this.entity = response;
        this.loading = false;
      })
    } catch(err) {
      this.handleErrors(err)
    }
  }

  @action
  update = async(_id, entity) => {
    this.startAsync();
    try{
      const response = await this.service.patch(_id, entity);
      runInAction('entity updated', () => {
        this.entities = this.entities.map(item => item._id === response._id ? response : item);
        this.redirect = true;
        this.loading = false;
      })
    } catch(err) {
      this.handleErrors(err)
    } finally {
      this.redirect = false;
    }
  }

  @action
  deleteOne = async(_id) => {
    await this.service.remove(_id)
    try {
      runInAction('entity deleted', () => {
        this.entities = this.entities.filter(item => item._id !== _id)
      })
    }
    catch(err) {
      this.handleErrors(err)
    }
  }

  @action
  addEvent = (entity) => {
    const found = this.entities.find(item => item._id === entity._id)
    if(!found){
      this.entities.push(entity)
    }
  }

  @action
  updateEvent = (entity) => {
    this.entities = this.entities.map(item => item._id === entity._id ? Object.assign(item, entity) : item);
  }

  @action
  removeEvent = (entity) => {
    const found = this.entities.find(item => item._id === entity._id)
    if(found){
        this.entities = this.entities.filter(item => item._id !== entity._id)
    }
  }
}

export default Store;
