// import logo from '../logo.svg';

function Logo({logoname}){
    return (
        <div className="AppLogo">
            {/* <img src={logo} className="Applogo" alt="logo" /> */}
            <p>{logoname}</p>
        </div>
    )
}

export default Logo;