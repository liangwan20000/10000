import React from 'react';
import './App.css';
// 引入组件
import { BrowserRouter } from 'react-router-dom';
// 路由基本使用
import BrowserRouter1 from './components/router.js';

function App() {
    return (
        <BrowserRouter>
            <BrowserRouter1></BrowserRouter1>
        </BrowserRouter>
    );
}

export default App;
