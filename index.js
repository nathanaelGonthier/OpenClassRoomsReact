
function Header(){
    const titre = "la maison jungle !";
    return (<h1>{titre.toUpperCase()}</h1>)    
}

function Description(){
    const text = "Ici achetez toutes les plantes dont vous avez toujours rÃªvÃ©";
    const emojis = "ððð"
    return (<p>{text.slice(0,11)+emojis}</p>)
}

function Cart(){
    const monstera = 8;
    const lierre = 10;
    const fleur = 15;
    var total = monstera + lierre + fleur;

    return (<div>
        <ul>
            <li>monstera : {monstera} â¬</li>
            <li>lierre  : {lierre} â¬</li>
            <li>bouquet de fleur : {fleur} â¬</li>
        </ul>
        total : {total} â¬
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