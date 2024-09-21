import DataTable from 'react-data-table-component';

const data = [
    {
      id: 1,
      title: 'Proyecto1',
      date: '"2015-03-25"',
      value: 321,
    },
    {
        id: 2,
        title: 'Proyecto2',
        date: '"2018-01-12"',
        value: 489,
    },
]
const columns = [
	{
		name: 'Nombre del proyecto',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Fecha',
		selector: row => row.date,
		sortable: true,
	},
	{
		name: 'Monto',
		selector: row => row.value,
		sortable: true,
	},
    
];

const tabletran = () => {
  return <DataTable columns={columns} data={data} pagination />;
}

export default tabletran;