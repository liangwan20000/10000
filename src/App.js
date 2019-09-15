import React from 'react';
import './App.css';
// 引入组件
import { BrowserRouter } from 'react-router-dom';
// 路由基本使用
// import BrowserRouter1 from './components/router.js';
// 重定向
import Redirectcomponent from './components/04-Redirect.js';

function App() {
    return (
        <BrowserRouter>
            <Redirectcomponent></Redirectcomponent>
        </BrowserRouter>
    );
}

export default App;
