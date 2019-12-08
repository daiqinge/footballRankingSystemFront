import { TableParameters, TableColumn } from 'components/Crud/Table/BasicTable';
import { EntityList } from 'components/Crud/EntityList';

export class DashboardPage extends EntityList {

  createColumns(): TableColumn[] {
    return [
      { name: 'id', 
        label: 'Id' , 
        width: 150, 
        align: 'center'
      },
      {
        name: 'winPlayer',
        label: 'Win Player',
        width: 50,
        align: 'center'
      },
      {
        name: 'losePlayer',
        label: 'Lose Player',
        width: 50,
        align: 'center'
      },
      {
        name: 'dateTime',
        label: 'Date',
        width: 50,
        align: 'center'
      },
    ];
  }

  createParameters(): TableParameters {
    return {
      apiUrl:  `http://localhost:8090/matchController/getList`,
      title: 'Match List',
      isDashBoard: true,
      entityName: 'dashboard' 
    };
  }
}
