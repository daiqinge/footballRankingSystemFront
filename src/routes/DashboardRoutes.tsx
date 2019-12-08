import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import { DashboardPage } from 'views/Dashboard/DashboardPage';
import { AddMatchPage } from 'views/AddMatchPage';
import { ShowPlayersPage } from 'views/ShowPlayersPage';

export const DEFAULT_ROUTE =  `/`;

export type Route = typeof dashboardRoutes[0];
const dashboardRoutes = [
  {
    path: `/Dashboard`,
    sidebarName: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    show: 'yes'
  },
  {
    path: `/AddMatch`,
    sidebarName: 'Add Match',
    icon: Dashboard,
    component: AddMatchPage,
    show: 'yes'
  },
  {
    path: `/ShowPlayers`,
    sidebarName: 'Show Players',
    icon: Person,
    component: ShowPlayersPage,
    show: 'yes'
  },
];

export default dashboardRoutes;
