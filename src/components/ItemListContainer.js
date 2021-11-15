export default function GreetingsMsg(props){
    return (
        <>
        <h1 class="d-flex justify-content-center mt-4">{props.title}</h1>
        <h4 class="d-flex justify-content-center">{props.greeting}</h4>
        </>
    );
}