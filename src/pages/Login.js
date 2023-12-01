import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="login-container">
        <Link to="/">
          <img
            src={require("../assets/images/polovniautomobili-logo.png")}
            alt="polovni-automobili-logo"
          />
        </Link>
        <div className="login-form-container">
          <div className="car-smile-logo">
            <img
              src={require("../assets/images/car_smile.png")}
              alt="smile-car-logo"
            />
          </div>
          <form>
            <input placeholder="Unesi E-mail adresu" />
            <button className="login-next-button">
              Dalje <span>&#10140;</span>
            </button>
            <p className="login-ili">ili</p>
            <div className="login-google-button">
              <button>Prijavi se putem Google-a</button>
            </div>
            <p>Nemaš nalog?</p>
            <div className="login-register-button">
              <button onClick={() => navigate("/register")}>
                Registruj se
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
