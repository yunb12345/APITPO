import DataTable from 'react-data-table-component';

const Tabletran = (props) => {
	const {data,columns} = props;

	return <DataTable columns={columns} data={data} pagination />;
}

export default Tabletran;