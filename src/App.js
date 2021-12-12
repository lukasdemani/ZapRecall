import Home from './Home.js';
import Card from './Card.js';
import Result from './Result.js';
import React from 'react';

export default function App(){
    const [screen, setScreen] = React.useState(true);
    const [finalResult, setFinalResult] = React.useState(true);
    const [finalScreen, setFinalScreen] = React.useState(true);

    const changeScreen = ()=>setScreen(false);

    function checkIndex(lastId){
        setFinalResult(lastId);
    }

    function renderFinalScreen(result){
        setFinalScreen(result);
        console.log(finalResult);
    }

    return (
        finalResult ?
            screen ? <Home screenInfo={changeScreen}/> : <Card lastId={checkIndex} result={renderFinalScreen}/>
        :
            <Result resultInfo={finalScreen}/>
    );
}