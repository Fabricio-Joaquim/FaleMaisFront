import React, { ReactElement } from 'react';
import {Warpper, Title} from './style';
interface AuxProps {
    children: ReactElement | ReactElement[]
  }
const Layer = ({children}:AuxProps) => {
	return (
		<>
			<Title>Calculadora FaleMais</Title>
			<Warpper>{children}</Warpper>
		</>
	);
};

export default Layer;