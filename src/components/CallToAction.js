import Input from "./ui/Input";

function CallToAction({headline, subheadline}){
    return (
        <div className="cta">
            <article>
                <h3>{headline}</h3>
                <p>{subheadline}</p>
            </article>
            <Input type="button" label="signup"/>
        </div>
    )
}

export default CallToAction;