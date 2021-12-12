import React from 'react';

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
    const [colorBorder, setColorBorder] = React.useState("");
    const [buttons, setButtons] = React.useState(true);
    const [index, setIndex] = React.useState(0);

    const flipCard = () => {setText(false);}

    function nextQuestion(id){
        setIndex(index+1);
        setText(true);
        setButtons(true);
        setColorBorder("");
    }

    function answeredQuestion(color, buttonsInfo){
        setColorBorder(" "+color);
        setButtons(buttonsInfo);
    }

    let colorClass = "card" + colorBorder;

    return (
        <div class={colorClass}>
            {text ? <Question question={questions[index].question} text={flipCard}/> : <Answer answer={questions[index].answer} answeredQuestion={answeredQuestion} buttons={buttons} nextQuestion={nextQuestion}/>}
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
    return (
        <div class="answer-card">
            <div class="question-id">
                {props.id}
            </div>
            <p>{props.answer}</p>
            {props.buttons ? <AnswerMoodButton changeColor={props.answeredQuestion} /> : <ShowAnswerButton text={props.nextQuestion}/>}
        </div>
    );
}


function ShowAnswerButton(props){

    return (
        <div class="icone-button-answer">
            <ion-icon name="arrow-undo" onClick={()=>props.text(1)}></ion-icon>
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