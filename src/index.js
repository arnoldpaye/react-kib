import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Search from './Search';
//import registerServiceWorker from './registerServiceWorker';

let kibana = (
    <div>
        <Header />
        <Search />
    </div>
);

ReactDOM.render(kibana, document.getElementById('root'));
//registerServiceWorker();
