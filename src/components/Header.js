import Hero from "./Hero";
import Logo from "./Logo";
import Navmenu from "./Navmenu";

const Header = ()=>{
    return (
        <header className="AppHeader">
            <div className="top">
                <Logo logoname="dullanotech"/>
                <Navmenu />
            </div>
            <Hero 
                main="This website is awesome"
                secondary="This website has some subtext that goes under the main title. It's smaller font and the color is lower contrast."
                imgurl="http://lorempixel.com/g/400/200"
                imgalt="technic"
            />
        </header>
    )
}

export default Header;