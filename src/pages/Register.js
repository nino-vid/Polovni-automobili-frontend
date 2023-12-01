import { useState } from "react";
import "./Register.css";

import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="register-container">
        <Link to="/">
          <img
            src={require("../assets/images/polovniautomobili-logo.png")}
            alt="logo"
          />
        </Link>
        <div className="register-form-container">
          <div className="register-left-container">
            <form>
              <p>E-mail adresa</p>
              <input
                placeholder="Unesi e-mail adresu"
                name="email"
                type="email"
              />
              <p>Lozinka</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Unesi minimum 8 karaktera"
                style={{ marginBottom: 0 }}
                name="password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
              <p>Ponovi lozinku</p>
              <input name="password" type="password" />
            </form>
            <div className="privacy-policy">
              <label>
                <input type="checkbox" required="required" autoComplete="off" />
                <span>
                  Prihvatam{" "}
                  <a target="_blank" href="#">
                    Uslove korišćenja
                  </a>
                  , Obaveštenje o privatnosti, i potvrđujem da sam lice koje je
                  navršilo 15 godina.
                </span>
              </label>
            </div>
            <div className="register-button">
              <button>Registruj se</button>
            </div>
            <div className="register-info">
              <p>
                <span>
                  <BsInfoCircle
                    size={16}
                    color="orange"
                    style={{ marginRight: "0.2rem" }}
                  />
                </span>
                Kako da se registrujem?
              </p>
            </div>
            <p className="register-ili">ili</p>
            <div className="register-google-button">
              <button>Registruj se putem Google-a</button>
            </div>
            <div className="register-login-link">
              <p>
                Već imaš nalog? <Link to="/login">Uloguj se</Link>
              </p>
            </div>
          </div>
          <div className="register-right-container">
            <p>PREDNOSTI NAŠIH REGISTROVANIH KORISNIKA</p>
            <ul>
              <li>
                <span>&#x2713;</span>Besplatan probni period oglašavanja
              </li>
              <li>
                <span>&#x2713;</span>Tvoja ponuda na računarima, mobilnim i
                tablet uređajima
              </li>
              <li>
                <span>&#x2713;</span>Prodajna podrška iz kancelarije i na terenu
              </li>
              <li>
                <span>&#x2713;</span>Lako upravljanje velikim brojem oglasa
              </li>
              <li>
                <span>&#x2713;</span>Najpovoljnije isticanje oglasa pomoću
                kredita
              </li>
              <li>
                <span>&#x2713;</span> Mogućnost isticanja u odnosu na druge
                prodavce
              </li>
              <li>
                <span>&#x2713;</span>Detaljan pregled statistike oglasa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
