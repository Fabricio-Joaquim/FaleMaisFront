import React from 'react';
import mock from './mock';
import {MyTable} from './style';
interface IMock {
    id?: number;
    origem: string;
    destino: string;
    valor: string;
}

const Table = () => {
	return (
		<MyTable data-testid="table">
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
						<tr key={item?.id}>
							<td>{item?.origem}</td>
							<td>{item?.destino}</td>
							<td>{item?.valor}</td>
						</tr>
					);
				})}
			</tbody>
		</MyTable>
	);
};

export default Table;