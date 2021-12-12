import Home from './Home.js';
import Card from './Card.js';
import Result from './Result.js';
import React from 'react';

export default function App(){
    const [screen, setScreen] = React.useState(true);
    const [finalResult, setFinalResult] = React.useState(true);
    const [finalScreen, setFinalScreen] = React.useState(true);
    const [goalZaps, setGoalZaps] = React.useState('');

    function changeScreen(goal){
        setGoalZaps(goal);
        setScreen(!screen);
    }

    function checkIndex(lastId){
        setFinalResult(lastId);
    }

    function renderFinalScreen(result){
        setFinalScreen(result);
    }

    const restartApp = () => {setFinalResult(true);}

    return (
        finalResult ?
            screen ? <Home screenInfo={changeScreen}/> : <Card lastId={checkIndex} result={renderFinalScreen} goal={goalZaps}/>
        :
            <Result resultInfo={finalScreen} screenInfo={restartApp}/>
    );
}