import React from 'react';
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => {
	const valorTotal = data.value;

	return(
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-gray-200">
			<thead className="bg-gray-50">
				<tr>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Porcentaje</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
				</tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200">
				{data.participantes.map((participante, index) => {
				const valorCalculado = (participante.porcentaje * valorTotal) / 100;
				return(
					<tr key={index}>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{participante.nombre}</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{participante.porcentaje}%</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{valorCalculado}</td>
					</tr>
				)
				})}
			</tbody>
			</table>
	  	</div>
	)

};
//este esta solo para los saber las transacciones de un proyecto

const Tabletran = (props) => {
	const {data,columns,expandable} = props;
	return <DataTable columns={columns} data={data} pagination expandableRows={expandable} expandableRowsComponent={ExpandedComponent}/>;
	//expandable es un booleano, si es true es expandible y muestra los contenidos
}
export default Tabletran;