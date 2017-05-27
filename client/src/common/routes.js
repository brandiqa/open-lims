const app = '/app/';
const dashboard = '/dashboard/';
const sales = dashboard + 'sales';
const inventory = dashboard + 'inventory';
const lab = dashboard + 'lab';
const admin = dashboard + 'admin';

export const routes = {
  app,
  dashboard,
  home: app,
  sales,
  customers: sales + '/customers',
  invoices: sales + '/invoices',
  payments: sales + '/payments',
  accounts: sales + '/accounts',
  inventory,
  products: inventory + '/products',
  stock: inventory + '/stock',
  lab,
  services: lab + '/services',
  tasks: lab + '/tasks',
  jobs: lab + '/jobs',
  jobTasks: lab + '/jobtasks'
  admin,
  users: admin + '/users',
  roles: admin + '/roles',
}
