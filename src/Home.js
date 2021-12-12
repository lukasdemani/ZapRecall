export default function Home(props) {
    function setScreen(screenInfo){
        screenInfo=false;
    }

    return (
        <div class="home-page">
            <img src="/assets/logo.png" alt=""></img>
            <div><button class="start-button" onClick={props.screenInfo}>Praticar React</button></div>
        </div>
    );
}