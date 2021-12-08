function Card(){
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

    return (
        <div class="card">
            <Question />
        </div>
    );
}

function Question(props){
    return (
        <p>{props.question}</p>
    );
}

function Answer(props){
    return (
        <p>{props.answer}</p>
    )
}