import React from 'react';


const Dashboard = React.lazy(() => import('./screens/Dashboard'));
const Calendar = React.lazy(() => import('./screens/Calendar'));
const Messenger = React.lazy(() => import('./screens/Messenger'));


const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/calendar', name: 'Calendar', component: Calendar },
  { path: '/messenger', name: 'Messenger', component: Messenger },


];

export default routes;
