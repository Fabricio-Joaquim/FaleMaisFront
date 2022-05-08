import React from 'react';
import mock from './mock';

interface IMock {
    id?: number;
    origem: string;
    destino: string;
    valor: string;
}

const Table = () => {
	return (
		<table data-testid="table">
			<thead>
				<tr>
					<th>Origem</th>
					<th>Destino</th>
					<th>$/min</th>
				</tr>
			</thead>
			<tbody>
				{mock.map((item:IMock) => {
					return (
						<tr key={item?.id} style={{textAlign:'center'}} >
							<td style={{border: '2px red solid', padding:10}}>{item?.origem}</td>
							<td style={{border: '2px red solid', padding:10}}>{item?.destino}</td>
							<td style={{border: '2px red solid', padding:10}}>{item?.valor}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;