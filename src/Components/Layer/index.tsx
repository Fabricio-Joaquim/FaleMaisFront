import React, { ReactElement } from 'react';
import {Warpper} from './style';
interface AuxProps {
    children: ReactElement | ReactElement[]
  }
const Layer = ({children}:AuxProps) => {
	return (
		<Warpper>{children}</Warpper>
	);
};

export default Layer;