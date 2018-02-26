import React from 'react';
import render from 'react-dom';
import styles from './first.css';

const App = () => {
    return (
        <div id="main">
            <h2>Redux app</h2>
            <h6>First workflow with Redux, React, Yarn, Webpack, lostGrid-postCss</h6>

            <div class="ColumnSection__grid u-clearfix">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
            <hr/>
            <div class="AlignmentSection__grid u-clearfix">
                <div>1</div>
            </div>
        </div>
    )
}

export default App;