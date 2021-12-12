import react from 'react';

export default function Result(props){
    return(
        <>
        <div class="mini-logo"><img src='/assets/logo-mini.png'></img></div>
        <div class="final-result">
            {props.resultInfo ? <Success/> : <Fail/>}
            <Restart screenInfo={props.screenInfo}/>
        </div>
        </>
    );
}

function Success(){
    return(
        <>
            <span><h1>PARABÉNS!</h1><img src='/assets/party.png'></img></span>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </>
    );
}

function Fail(){
    return(
        <>
            <span><h1>PUTZ..</h1><img src='/assets/sad.png'></img></span>
            <p>Você esqueceu alguns flashcards...</p>
            <p>Não desanime! Na próxima você consegue!</p>
        </>
    );
}

function Restart(props){
    return(
        <button class="restart-button" onClick={()=>props.screenInfo()}>Tentar novamente<ion-icon name="play-forward"></ion-icon></button>
    );
}