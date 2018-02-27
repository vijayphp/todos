import React from 'react';
import render from 'react-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './module/Login';

import styles from './first.css';

const App = () => {
    return (
        <div id="main">
            <Header />
            <Login />
            <div className="ColumnSection__grid u-clearfix">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
            <hr/>
            <div className="AlignmentSection__grid u-clearfix">
                <div>1</div>
            </div>

            <Footer />
        </div>
    )
}

export default App;