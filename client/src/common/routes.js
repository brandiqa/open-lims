export const APP_ROUTE = '/app';
export const DASHBOARD_ROUTE = '/dashboard';
export const SALES_ROUTE = `${DASHBOARD_ROUTE}/sales`;
export const INVENTORY_ROUTE = `${DASHBOARD_ROUTE}/inventory`;
export const LAB_ROUTE = `${DASHBOARD_ROUTE}/lab`;
export const ADMIN_ROUTE = `${DASHBOARD_ROUTE}/admin`;

import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import App from '../App';
import Dashboard from '../Dashboard';
import { primary } from '../common/theme';

import MainDashboard from '../dashboard/dashboard-page';

import Sales from '../sales';
import SalesDashboard from '../sales/sales-dashboard';
import Customers from '../sales/customers';
import Invoices from '../sales/invoices';
import Payments from '../sales/payments';
import Accounts from '../sales/accounts';

import Admin from '../admin';


const Default = () => (
  <p>This component is under construction!</p>
)

const routes = [
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
            label: 'Summary',
            exact: true,
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
        component: Admin,
        routes: [
          {
            path: `${ADMIN_ROUTE}`,
            label: 'Summary',
            exact: true,
            component: Default
          },
          {
            path: `${ADMIN_ROUTE}/users`,
            label: 'Users',
            component: Default
          },
          {
            path: `${ADMIN_ROUTE}/roles`,
            label: 'Roles',
            component: Default
          }
        ]
      }
    ]
  }
];


function getSubRoutes(path) {
  const route = routes.find(route => route.path === path);
  if(route) {
    return route.routes;
  } else {
    const dashboardRoutes = routes.find(route => route.path === DASHBOARD_ROUTE).routes;
    const targetRoute = dashboardRoutes.find(route => route.path === path);
    return targetRoute.routes;
  }
}

export function getSidebarLinks(path) {
  const routes = getSubRoutes(path);
  return routes.map(route => (
      <NavLink key={route.path} className='item' activeClassName='active' exact={route.exact} to={route.path}>
        <Icon name={route.icon}/>
        {route.label}
      </NavLink>
  ));
}

export function getMenuLinks(path) {
  const routes = getSubRoutes(path);
  const className = `item ${primary}`;
  return routes.map(route => (
    <NavLink  key={route.path} className={className} activeClassName='active' exact={route.exact} to={route.path}>
      {route.label}
    </NavLink>
  ));
}

export function getRoutes(path) {
  const routes = getSubRoutes(path);
  return routes.map(route => (
    <Route key={route.path} component={route.component} exact={route.exact} path={route.path} />
  ))
}
