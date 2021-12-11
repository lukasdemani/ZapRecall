import React, { useState } from 'react';

export default function Card(){
    const questions = [
        {id: 1, question: "O que é JSX?", answer: 'Uma extensão de linguagem do JavaScript'},
        {id: 2, question: 'O React é __ ', answer: 'Uma biblioteca JavaScript para construção de interfaces'},
        {id: 3, question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula'},
        {id: 4, question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'},
        {id: 5, question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {id: 6, question: 'Usamos o npm para __ ', answer: 'gerenciar os pacotes necessários e suas dependências'},
        {id: 7, question: 'Usamos props para __', answer: 'passar diferentes informações para componentes'},
        {id: 8, question: 'Usamos estado (state) para __ ', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ];

    const [text, setText] = React.useState(true);

    const flipCard = () => {setText(false);}

    return (
        <div class="card">
            {text ? <Question question={questions[0].question} text={flipCard}/> : <Answer answer={questions[0].answer}/>}
        </div>
    );
}

function Question(props){
    return (
        <div class="question-card">
            <div class="question-id">
                {props.id}
            </div>
            <p>{props.question}</p>
            <ShowAnswerButton text={props.text}/>
        </div>
    );
}

function Answer(props){
    const [colorBorder, setColorBorder] = React.useState("");
    const [buttons, setButtons] = React.useState(true);

    const rederizeButtons = () => {setButtons(false);}

    function  answeredQuestion(color){
        setColorBorder(" "+color);
        setButtons(false);
    }

    let colorClass = "answer-card" + colorBorder;

    return (
        <div class={colorClass}>
            <div class="question-id">
                {props.id}
            </div>
            <p>{props.answer}</p>
            {buttons ? <AnswerMoodButton changeColor={answeredQuestion}/> : <ShowAnswerButton text={rederizeButtons}/>}
        </div>
    );
}


function ShowAnswerButton(props){
    return (
        <div class="icone-button-answer">
            <ion-icon name="arrow-undo" onClick={props.text}></ion-icon>
        </div>
    );
}

function AnswerMoodButton(props){
    const answerMoods = [
        {mood: 'Aprendi agora', color: 'mood black'},
        {mood: 'Não lembrei', color: 'mood red'},
        {mood: 'Lembrei com esforço', color: 'mood green'},
        {mood: 'Zap!', color: 'mood yellow'}
    ];

    const [colorBorder, setColorBoder] = React.useState("");

    return (
        <div class="answer-moods">
                {answerMoods.map(option => 
                    <button class={option.color} onClick={() => props.changeColor(option.color)}>{option.mood}</button>)}
         </div>
    );
}