import remotedev from 'mobx-remotedev';
import AuthStore from './auth-store';
import Store from './store';

const config = {
  onlyActions:true,
  filters: {
    whitelist: /fetch|update|create|Event|entity|entities|handleErrors/
  }
};

const authStore = new AuthStore('users');
const userStore = new Store('users');
const customerStore = new Store('api/customers');

const allStores = {
  authStore: remotedev(authStore, Object.assign(config, {name:'Auth'})),
  userStore: remotedev(userStore, Object.assign(config, {name:'User'})),
  customerStore: remotedev(customerStore, Object.assign(config, {name:'Customer'}))
};

export default allStores;
