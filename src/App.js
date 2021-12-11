import Home from './Home.js';
import Card from './Card.js';
import React, { useState } from 'react';

export default function App(){
    const [screen, setScreen] = React.useState("home");

    return (
        <Card />
    );
}