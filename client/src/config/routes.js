import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { primary } from './theme';

/** Top-level Routes **/
import App from '../App';
import Dashboard from '../Dashboard';

/** Dashboard Routes **/
import DashboardSummary from '../dashboard/summary';

/** Sales Routes **/
import Sales from '../sales';
import SalesSummary from '../sales/summary';
import Customers from '../sales/customers';
import Invoices from '../sales/invoices';
import Payments from '../sales/payments';
// import Accounts from '../sales/accounts';

/** Inventory Routes **/
import Inventory from '../inventory';
import InventorySummary from '../inventory/summary';
import Vendors from '../inventory/vendors';
import Products from '../inventory/products';

/** Lab Routes **/
import Lab from '../lab';
import LabSummary from '../lab/summary';
import Services from '../lab/services';
import Tasks from '../lab/tasks';

/** ADMIN Routes **/
import Admin from '../admin';
import AdminSummary from '../admin/summary';
import Users from '../admin/users';
import Roles from '../admin/roles';

/** CONSTANTS **/
export const APP_ROUTE = '/app';
export const DASHBOARD_ROUTE = '/dashboard';
export const SALES_ROUTE = `${DASHBOARD_ROUTE}/sales`;
export const INVENTORY_ROUTE = `${DASHBOARD_ROUTE}/inventory`;
export const LAB_ROUTE = `${DASHBOARD_ROUTE}/lab`;
export const ADMIN_ROUTE = `${DASHBOARD_ROUTE}/admin`;

/** Empty Placeholder Component **/
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
          // {
          //   path: `${SALES_ROUTE}/accounts`,
          //     label: 'Accounts',
          //   component: Accounts
          // }
        ]
      },
      {
        path: INVENTORY_ROUTE,
        label: 'Inventory',
        icon: 'book',
        component: Inventory,
        routes: [
          {
            path: INVENTORY_ROUTE,
            label: 'Summary',
            exact: true,
            component: InventorySummary,
          },
          {
            path: `${INVENTORY_ROUTE}/vendors`,
            label: 'Vendors',
            component: Vendors,
          },
          {
            path: `${INVENTORY_ROUTE}/products`,
            label: 'Products',
            component: Products,
          },
          {
            path: `${INVENTORY_ROUTE}/purchase`,
            label: 'Purchase',
            component: Default,
          },
          {
            path: `${INVENTORY_ROUTE}/stock`,
            label: 'Stock',
            component: Default,
          },
          {
            path: `${INVENTORY_ROUTE}/movement`,
            label: 'Movement',
            component: Default,
          },
        ]
      },
      {
        path: LAB_ROUTE,
        label: 'Lab',
        icon: 'lab',
        component: Lab,
        routes: [
          {
            path: LAB_ROUTE,
            label: 'Summary',
            exact: true,
            component: LabSummary,
          },
          {
            path: `${LAB_ROUTE}/services`,
            label: 'Services',
            component: Services,
          },
          {
            path: `${LAB_ROUTE}/tests`,
            label: 'Tests',
            component: Tasks,
          },
          {
            path: `${LAB_ROUTE}/jobs`,
            label: 'Jobs',
            component: Default,
          },
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
            component: AdminSummary
          },
          {
            path: `${ADMIN_ROUTE}/users`,
            label: 'Users',
            component: Users
          },
          {
            path: `${ADMIN_ROUTE}/roles`,
            label: 'Roles',
            component: Roles
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
