import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/App';
import reportWebVitals from './reportWebVitals';
import { Reset } from 'styled-reset';
import Layer from './Components/Layer/index';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ThemeProvider } from 'styled-components';
import Global from './style/global';
import theme from './style/theme';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Reset />
			<Global />
			<Layer>
				<QueryClientProvider contextSharing={true} client={client}>
					<App />
				</QueryClientProvider>
			</Layer>		
		</ThemeProvider>
	</React.StrictMode>
);

reportWebVitals();
