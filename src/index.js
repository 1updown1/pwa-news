import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './views/App';
import './mock';

ReactDOM.render( 
	<Router >
    	<App />
    </Router>, 
    document.getElementById('root')
);