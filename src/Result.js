import react from 'react';

export default function Result(props){
    return(
        <div class="final-result">
            {props.resultInfo ? <Success/> : <Fail/>}
        </div>
    );
}

function Success(){
    return(
        <>
            <h1>PARABÉNS!</h1>
            <p>Você não esqueceu de nenhum flashcard!</p>
        </>
    );
}

function Fail(){
    return(
        <>
            <h1>PUTZ...</h1>
            <p>Você esqueceu alguns flashcards...</p>
            <p>Não desanime! Na próxima você consegue!</p>
        </>
    );
}