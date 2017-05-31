import remotedev from 'mobx-remotedev';
import AuthStore from './auth-store';
import Store from './store';

const config = {
  onlyActions:true,
  filters: {
    // whitelist: /fetch|update|create|Event|entity|entities|handleErrors/
  }
};

const authStore = new AuthStore('users');
const userStore = new Store('users');

const customerStore = new Store('api/customers');
const invoiceStore = new Store('api/invoices');
const paymentStore = new Store('api/payments');

const vendorStore = new Store('api/vendors');
const productStore = new Store('api/products');

const jobStore = new Store('api/jobs');
const serviceStore = new Store('api/services');
const taskStore = new Store('api/tasks');


const allStores = {
  authStore: remotedev(authStore, Object.assign({}, config, {name:'Auth'})),
  userStore: remotedev(userStore, Object.assign({}, config, {name:'User'})),
  customerStore: remotedev(customerStore, Object.assign({}, config, {name:'Customer'})),
  vendorStore: remotedev(vendorStore, Object.assign({}, config, {name:'Vendor'})),
  productStore: remotedev(productStore, Object.assign({}, config, {name:'Product'})),
  taskStore: remotedev(taskStore, Object.assign({}, config, {name:'Task'})),
  serviceStore: remotedev(serviceStore, Object.assign({}, config, {name:'Services'})),
  invoiceStore: remotedev(invoiceStore, Object.assign({}, config, {name:'Invoices'})),
  paymentStore: remotedev(paymentStore, Object.assign({}, config, {name:'Payments'})),
  jobStore: remotedev(jobStore, Object.assign({}, config, {name:'Jobs'})),
};

export default allStores;
