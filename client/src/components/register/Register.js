import "./register.css"

const Register = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Bn'R Social</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Bn'R Social.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className="loginInput" placeholder="Username"/>
                    <input type="Email" className="loginInput" placeholder="E-mail"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <input type="password" className="loginInput" placeholder="Password Again"/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register