import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import App from '../App';
import Dashboard from '../Dashboard';
import { primary } from '../common/theme';

import DashboardSummary from '../dashboard/summary';

import Sales from '../sales';
import SalesSummary from '../sales/summary';
import Customers from '../sales/customers';
import Invoices from '../sales/invoices';
import Payments from '../sales/payments';
import Accounts from '../sales/accounts';

import Admin from '../admin';

export const APP_ROUTE = '/app';
export const DASHBOARD_ROUTE = '/dashboard';
export const SALES_ROUTE = `${DASHBOARD_ROUTE}/sales`;
export const INVENTORY_ROUTE = `${DASHBOARD_ROUTE}/inventory`;
export const LAB_ROUTE = `${DASHBOARD_ROUTE}/lab`;
export const ADMIN_ROUTE = `${DASHBOARD_ROUTE}/admin`;

const Default = () => (
  <p>This component is under construction!</p>
)

const routes = [
  {
    path: APP_ROUTE,
    label: 'Home',
    component: App
  },
  {
    path: DASHBOARD_ROUTE,
    label: 'Dashboard',
    component: Dashboard,
    routes: [
      {
        path: DASHBOARD_ROUTE,
        label: 'Dashboard',
        icon: 'home',
        exact: true,
        component: DashboardSummary
      },
      {
        path: SALES_ROUTE,
        label: 'Sales',
        icon: 'money',
        component: Sales,
        routes: [
          {
            path: SALES_ROUTE,
            label: 'Summary',
            exact: true,
            component: SalesSummary
          },
          {
            path: `${SALES_ROUTE}/customers`,
            label: 'Customers',
            component: Customers
          },
          {
            path: `${SALES_ROUTE}/invoices`,
            label: 'Invoices',
            component: Invoices
          },
          {
            path: `${SALES_ROUTE}/payments`,
            label: 'Payments',
            component: Payments
          },
          {
            path: `${SALES_ROUTE}/accounts`,
              label: 'Accounts',
            component: Accounts
          }
        ]
      },
      {
        path: ADMIN_ROUTE,
        label: 'Admin',
        icon: 'users',
        component: Admin,
        routes: [
          {
            path: ADMIN_ROUTE,
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
