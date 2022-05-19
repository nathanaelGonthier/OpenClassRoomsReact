
function Header(){
    const titre = "la maison jungle !";
    return (<h1>{titre.toUpperCase()}</h1>)    
}

function Description(){
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé";
    const emojis = "😋😊😉"
    return (<p>{text.slice(0,11)+emojis}</p>)
}

function Cart(){
    const monstera = 8;
    const lierre = 10;
    const fleur = 15;
    var total = monstera + lierre + fleur;

    return (<div>
        <ul>
            <li>monstera : {monstera} €</li>
            <li>lierre  : {lierre} €</li>
            <li>bouquet de fleur : {fleur} €</li>
        </ul>
        total : {total} €
    </div>)
}

function Banner(){
    return (<div>
        <Header/>
        <Cart/>
        <Description/>
    </div>)
}

ReactDOM.render(<Banner/>,document.getElementById("root"))