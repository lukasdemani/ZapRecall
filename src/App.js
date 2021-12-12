import Home from './Home.js';
import Card from './Card.js';
import React from 'react';

export default function App(){
    const [screen, setScreen] = React.useState(true);

    const changeScreen = ()=>setScreen(false);

    return (
        screen ? <Home screenInfo={changeScreen}/> : <Card/>
    );
}