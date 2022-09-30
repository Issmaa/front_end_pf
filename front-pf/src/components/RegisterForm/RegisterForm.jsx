import { Link } from "react-router-dom";
import { useState } from "react";
import s from "./Register.module.css";
import validate from "./validator";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    date_of_birth: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
    address: "",
  });

  const [click, setClick] = useState({
    username: false,
    email: false,
    password: false,
    date_of_birth: false,
    first_name: false,
    last_name: false,
    zip_code: false,
    address: false,
  })

  const [error, setError] = useState({});

  const handleClick = (e) => {
    if(!error[`${e.target.name}`]) {
      setClick({
        ...click,
        [e.target.name]: !click[`${e.target.name}`] 
      })
    }
  }

  console.log(click)

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className={s.container}>
      <div className={s.registerFormMainContainer}>
        <div className={s.formContainer}>
          <div className={s.forms}>
            <div className={s.formLogin}>
              <span className={s.title}>Registration</span>
              <form action="#">
                <div className={s.inputField}>
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    required
                    name="username"
                    value={input.username}
                    onClick={handleClick}
                  />
                  {click.username && error.username && (
                    <p className={s.error}>{error.username}</p>
                  )}
                  <i class="uil uil-user"></i>
                </div>
                <div className={s.inputField}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoCapitalize="off"
                    required
                    value={input.email}
                    onClick={handleClick}
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-envelope icon"></i>
                  {click.email && error.email && <p className={s.error}>{error.email}</p>}
                </div>
                <div className={s.inputField}>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    placeholder="Password"
                    autoCapitalize="off"
                    onClick={handleClick}
                    required
                    onChange={handleInputChange}
                  />
                  <i class="uil uil-lock"></i>
                  {click.password && error.password && (
                    <p className={s.error}>{error.password}</p>
                  )}
                </div>
                <div className={s.inputField}>
                  <p id={s.dateOfBirth}>Date of Birth</p>
                  <input
                    type="date"
                    autoComplete="off"
                    onChange={handleInputChange}
                    spellCheck="off"
                    required
                    name="date_of_birth"
                    value={input.date_of_birth}
                  />
                  <i class="uil uil-user"></i>
                  {click.date_of_birth && error.date_of_birth && (
                    <p className={s.error}>{error.date_of_birth}</p>
                    )}
                </div>

                {/* Phone and PIN numbers */}
                <div className={s.line}></div>

                <div className={s.phoneContainer}>
                  <i class="uil uil-shield-check" id={s.phoneShield}></i>
                  <div className={s.phoneCountryCode}>+54</div>
                  <div className={s.phoneInput}>
                    <input
                      type="text"
                      name="phone_number"
                      value={input.phone_number}
                      placeholder="Phone Number"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                  </div>
                </div>

                <div className={s.pinContainer}>
                  <div className={s.pinInput}>
                    <input
                      type="text"
                      placeholder="PIN Code"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    <button className={s.pinBtn}>SEND</button>
                  </div>
                </div>
                <div className={s.line}></div>

                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      name="first_name"
                      value={input.first_name}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-user"></i>
                    {click.first_name && error.first_name && (
                      <p className={s.error}>{error.first_name}</p>
                    )}
                  </div>
                  <div className={s.lastnameContainer}>
                    <input
                      id="lastname"
                      type="text"
                      name="last_name"
                      value={input.last_name}
                      placeholder="Last Name"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.last_name && error.last_name && (
                      <p className={s.error}>{error.last_name}</p>
                    )}
                  </div>
                </div>
                <div className={s.firstLastNameContainer}>
                  <div className={`${s.nameContainer} ${s.inputField}`}>
                    <input
                      id="name"
                      type="text"
                      name="city"
                      value={input.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      autoCapitalize="off"
                      required
                    />
                    <i class="uil uil-map "></i>
                  </div>
                  <div className={s.lastnameContainer}>
                    <input
                      id="lastname"
                      type="text"
                      name="zip_code"
                      value={input.zip_code}
                      placeholder="Zip Code"
                      onChange={handleInputChange}
                      autoCapitalize="off"
                      required
                    />
                    {click.zip_code && error.zip_code && (
                      <p className={s.error}>{error.zip_code}</p>
                    )}
                  </div>
                </div>

                <div className={s.inputField}>
                  <input
                    type="text"
                    name="address"
                    value={input.address}
                    placeholder="Address"
                    autoCapitalize="off"
                    onChange={handleInputChange}
                    required
                  />
                  <i class="uil uil-map-marker"></i>
                  {click.address && error.address && <p className={s.error}>{error.address}</p>}
                </div>
                {/* Button */}

                <div className={s.loginButton}>
                  <input type="button" value="Create Account" />
                </div>
              </form>
              <div className={s.loginSignup}>
                <span className="text">
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
