import CallToAction from "../CallToAction";
import Section from "../Section";

function Home(){
    return (
        <div>
            <Section>
                section 2
            </Section>
            <Section>
                <CallToAction 
                    headline="Call to Action it's time!"
                    subheadline="Signup for our product by clicking that button right over there!"
                />
            </Section>
        </div>
    )
}

export default Home;