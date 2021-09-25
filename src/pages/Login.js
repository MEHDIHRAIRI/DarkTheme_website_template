import React from "react";
import "./Login.css";
import logo from "../assets/images/title.png";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Login() {
  return (
    <div className="login-Box">
      <div className="first">
        <img src={logo} className="img" id="icon" alt="User Icon" />
      </div>
      <form>
        <span>
          <FontAwesomeIcon color="white" icon={faUser} />
          <input
            type="text"
            id="login"
            className="login"
            name="login"
            placeholder="Username"
          />
        </span>
        <br />
        <span>
          <FontAwesomeIcon color="white" icon={faLock} />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </span>{" "}
        <br />
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
          <label id="RR"> Remember me </label>
        </label>
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
        <div>
          <br />
          <input type="submit" className="btn" defaultValue="LOGIN" />
          <br />
          <label id="pb">Powred By Enova Robotics</label>{" "}
        </div>
      </form>
    </div>
  );
}
