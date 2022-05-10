import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './pages/Home/App';

test(
	'input and button should be displayed',
	() => {
		render(<App />);
		expect(screen.getByText('Button')).toBeInTheDocument();
		expect(screen.getByTestId('minute')).toBeInTheDocument();
		expect(screen.getByTestId('origin')).toBeInTheDocument();
		expect(screen.getByTestId('destin')).toBeInTheDocument();
		expect(screen.getByTestId('plan')).toBeInTheDocument();
		expect(screen.getByTestId('plan')).toBeInTheDocument();
	}
);


test(
	'table should be displayed',
	() => {
		render(<App />);
		expect(screen.getByTestId('table')).toBeInTheDocument();
	}
);