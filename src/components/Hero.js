import Input from "./ui/Input";

function Hero(
    { main, secondary, imgurl, imgalt }
    ){
    
    return (
        <div className="AppHero">
            <article>
                <h1>{main}</h1>
                <p>{secondary}</p>
                <Input
                    type="button"
                    label="Signup"
                />
            </article>
            <figure>
                <Input type="image" src={imgurl} alt={imgalt}/>
            </figure>
        </div>
    )
}

export default Hero;