import { observable, action, computed } from 'mobx';
import _ from 'lodash';
import { feathersClient } from './client';

class AuthStore {

  @observable user = {};
  @observable authPending = true;
  @observable loading = false;
  @observable errors = {}

  client = feathersClient();
  userService = null;

  constructor(serviceName) {
    this.userService = this.client.service(serviceName);
  }

  @action
  sessionAuth = () => {
    this.loading = true;
    this.client.authenticate()
      .then(response => this.client.passport.verifyJWT(response.accessToken))
      .then(data => this.userService.get(data.userId))
      .then(user => this.user = user)
      .catch(err => console.info('AuthStore: no valid session found'))
      .then(() => {
        this.loading = false
        this.authPending = false
      })
  }

  @action
  login = ({email, password}) => {
    this.errors = {};
    this.loading = true;
    this.client.authenticate({ strategy: 'local', email, password })
    .then(response => this.client.passport.verifyJWT(response.accessToken))
    .then(data => this.userService.get(data.userId))
    .then(user => this.user = user)
    .catch(err => {
      const message = err.code === 401 ? 'Invalid Email/Password' : err.message
      this.errors = {global: message}
    })
    .then(() => this.loading = false);
  }

  @action
  logout = () => {
    this.client.logout()
      .then(() => this.user = {})
  }

  @computed get isAuthenticated() {
    return !_.isEmpty(this.user);
  }

  @computed get fullName() {
    if(this.user){
      return `${this.user.firstName} ${(this.user.lastName || '')}`
    }
    return null;
  }
}

export default AuthStore;
