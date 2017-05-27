const app = '/app/';
const dashboard = '/dashboard/';

export const routes = {
  app,
  dashboard,
  home: app,
  sales: dashboard + 'sales',
  inventory: dashboard + 'inventory',
  lab: dashboard + 'lab',
  admin: dashboard + 'admin'
}
