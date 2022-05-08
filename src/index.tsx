import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/App';
import reportWebVitals from './reportWebVitals';
import { Reset } from 'styled-reset';
import Layer from './Components/Layer/index';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Reset />
		<div style={{display:'flex', justifyContent:'center', alignItems:'center', 			height:'100vh',

			//background: '#0f0c29',  /* fallback for old browsers */
			//background: '-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)',  /* Chrome 10-25, Safari 5.1-6 */
			//background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		
			background: 'linear-gradient(320deg,#f27121,#e94057,#8a2387)',
		
		
		}}>

			<Layer>
				<App />
			</Layer>		
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
