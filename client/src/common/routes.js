const app = '/app/';
const dashboard = '/dashboard/';
const sales = dashboard + 'sales';

export const routes = {
  app,
  dashboard,
  home: app,
  sales,
  customer: sales + '/customer',
  invoice: sales + '/invoice',
  inventory: dashboard + 'inventory',
  lab: dashboard + 'lab',
  admin: dashboard + 'admin'
}
