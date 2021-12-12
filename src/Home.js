import React from 'react';

export default function Home(props) {
    const [goal, setGoal] = React.useState("");

    return (
        <div class="home-page">
            <img src="/assets/logo.png" alt=""></img>
            <input placeholder="Sua meta de zaps" value={goal} onChange={e => setGoal(e.target.value)} />
            <div><button class="start-button" onClick={()=>props.screenInfo(goal)} data-identifier="start-zap-recall">Praticar React<ion-icon name="play-forward"></ion-icon></button></div>
        </div>
    );
}