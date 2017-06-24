import React from 'react';

import { BrowserRouter, Match, Miss } from 'react-router';


import { render } from 'react-dom';
import './css/style.css';
import App from './components/App'
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';



const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match exactly pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>

    )
}


render(<Root/>, document.querySelector('#main'));