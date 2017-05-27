import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import App from '../App';
import Dashboard from '../Dashboard';
// import { primary } from '../common/theme';

import MainDashboard from '../dashboard/dashboard-page';

import Sales from '../sales';
import SalesDashboard from '../sales/sales-dashboard';
import Customers from '../sales/customers';
import Invoices from '../sales/invoices';
import Payments from '../sales/payments';
import Accounts from '../sales/accounts';

import Admin from '../admin';


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
  jobTasks: lab + '/jobtasks',
  admin,
  users: admin + '/users',
  roles: admin + '/roles',
}

export const rts = [
  {
    path: '/app',
    label: 'Home',
    component: App
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    component: Dashboard,
    routes: [
      {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'home',
        exact: true,
        component: MainDashboard
      },
      {
        path: '/dashboard/sales',
        label: 'Sales',
        icon: 'money',
        component: Sales,
        routes: [
          {
            path: '/dashboard/sales',
            label: 'Sales',
            component: SalesDashboard
          },
          {
            path: '/dashboard/sales/customers',
            label: 'Customers',
            component: Customers
          },
          {
            path: '/dashboard/sales/invoices',
            label: 'Invoices',
            component: Invoices
          },
          {
            path: '/dashboard/sales/payments',
            label: 'Payments',
            component: Payments
          },
          {
            path: '/dashboard/sales/accounts',
              label: 'Accounts',
            component: Accounts
          }
        ]
      },
      {
        path: '/dashboard/admin',
        label: 'Admin',
        icon: 'users',
        component: Admin
      }
    ]
  }
];

export function getLinks(path) {
  const routes = rts.find(route => route.path === path).routes;
  return routes.map(route => (
      <NavLink  key={route.path} className='item' activeClassName='active' exact={route.exact} to={route.path}>
        {route.label}
      </NavLink>
  ))
}

export function getIconLinks(path) {
  const routes = rts.find(route => route.path === path).routes;
  return routes.map(route => (
      <NavLink key={route.path} className='item' activeClassName='active' exact={route.exact} to={route.path}>
        <Icon name={route.icon}/>
        {route.label}
      </NavLink>
  ))
}

export function getRoutes(path) {
  const routes = rts.find(route => route.path === path).routes;
  return routes.map(route => (
    <Route key={route.path} component={route.component} exact={route.exact} path={route.path} />
  ))
}
