import React from 'react';

export default function Card(props){
    const questions = [
        {question: "O que é JSX?", answer: 'Uma extensão de linguagem do JavaScript'},
        {question: 'O React é __ ', answer: 'Uma biblioteca JavaScript para construção de interfaces'},
        {question: 'Componentes devem iniciar com __ ', answer: 'letra maiúscula'},
        {question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'},
        {question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {question: 'Usamos o npm para __ ', answer: 'gerenciar os pacotes necessários e suas dependências'},
        {question: 'Usamos props para __', answer: 'passar diferentes informações para componentes'},
        {question: 'Usamos estado (state) para __ ', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ];

    const [text, setText] = React.useState(true);
    const [colorBorder, setColorBorder] = React.useState("");
    const [buttons, setButtons] = React.useState(true);
    const [index, setIndex] = React.useState(0);
    const [zaps, setZaps] = React.useState(0);

    const flipCard = () => {setText(false);}

    function nextQuestion(){
        setIndex(index+1);
        setText(true);
        setButtons(true);
        setColorBorder("");
        if (index>6) {
            props.lastId(false);
            if (zaps<props.goal){
                props.result(false);
            }
        }
      
    }

    function answeredQuestion(color, buttonsInfo){
        setColorBorder(" "+color);
        setButtons(buttonsInfo);
        if (color === 'mood yellow'){
            setZaps(zaps+1);
        }
        if (color === 'mood red') {
            props.result(false);
        }
        
    }

    let colorClass = "card" + colorBorder;

    return (
       <>
        <div class="mini-logo"><img src='/assets/logo-mini.png'></img></div>
        <div class='card-page'>
            <div class={colorClass} data-identifier="flashcard">
                {text ? 
                    <Question question={questions[index].question} id={index} text={flipCard}/> 
                : 
                    <Answer answer={questions[index].answer} id={index} answeredQuestion={answeredQuestion} buttons={buttons} nextQuestion={nextQuestion}/>}
            </div>
        </div>
        </>
    );
}

function Id(props){
    const index =props.id+1;
    return(
        <div class="question-id" data-identifier="counter">
            {index}/8
        </div>
    )
}

function Question(props){
    return (
        <div class="question-card">
            <Id id={props.id}/>
            <p>{props.question}</p>
            <ShowAnswerButton text={props.text}/>
        </div>
    );
}

function Answer(props){
    return (
        <div class="answer-card">
            <Id id={props.id}/>
            <p>{props.answer}</p>
            {props.buttons ? <AnswerMoodButton changeColor={props.answeredQuestion} /> : <ShowAnswerButton text={props.nextQuestion}/>}
        </div>
    );
}


function ShowAnswerButton(props){

    return (
        <div class="icone-button-answer" data-identifier="arrow">
            <ion-icon name="arrow-undo" onClick={()=>props.text()}></ion-icon>
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

    function setButtons(color, buttonsInfo){
        props.changeColor(color);
        buttonsInfo=false;
    }

    return (
        <div class="answer-moods">
                {answerMoods.map(option => 
                    <button class={option.color} onClick={()=>setButtons(option.color)}>{option.mood}</button>)}
         </div>
    );
}