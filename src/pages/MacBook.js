import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowLeft,
  faBatteryFull,
  faCog,
  faDesktop,
  faEye,
  faPowerOff,
  faQrcode,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/title.png";
import buttonSwitch from "../assets/images/emg28.png";
import "./MacBook.css";
import { render } from "@testing-library/react";
export default function MacBook() {
  var dt = new Date();
  const datetime =
    ("0" + dt.getDate()).slice(-2) +
    "-" +
    ("0" + (dt.getMonth() + 1)).slice(-2) +
    "-" +
    dt.getFullYear() +
    "  " +
    ("0" + dt.getHours()).slice(-2) +
    ":" +
    ("0" + dt.getMinutes()).slice(-2) +
    ":" +
    ("0" + dt.getSeconds()).slice(-2);

  return (
    <div className="body">
      <div className="sidebar">
        <div>
          <ul>
            <li>
              <img src={logo} id="icon" alt="User Icon" />
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faQrcode} className="fa fa-qrcode" />{" "}
                Dashbord{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faQrcode} className="fa fa-qrcode" />{" "}
                AGVS
              </a>
            </li>
            <li>
              <a href="/details">
                <FontAwesomeIcon icon={faEye} className="fa fa-eye" /> Global
                Vision{" "}
              </a>
            </li>
            <li>
              <a href="/details">
                <FontAwesomeIcon icon={faDesktop} className="fa fa-desktop" />{" "}
                Monitoring{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="settings">
          <a href="#">
            <FontAwesomeIcon icon={faCog} className="fa fa-cog" /> Setting{" "}
          </a>
          <a href="/login">
            <FontAwesomeIcon icon={faPowerOff} className="fa fa-power-off" />{" "}
            Logout{" "}
          </a>
        </div>
      </div>
      <div className="main">
        <div className="navbar">
          <div className="arrow">
            <a href="#">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="fa fa-arrow-left fa-lg"
              />
            </a>
            <h3 style={{ color: "white" }} className="selected-option">
              Monitoring
            </h3>
          </div>
          <div className="avatar">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="fa fa-user-circle-o fa-2x"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <div className="stop">
            <FontAwesomeIcon
              icon={faBatteryFull}
              style={{ color: "green" }}
              className="fa fa-battery-full"
              aria-hidden="true"
            />
            <h4>Mode Joystick</h4>
            <h4>
              <p>
                {" "}
                <span id="datetime0" />
              </p>
            </h4>
            <img id="img1" src={buttonSwitch} />
          </div>
          <div className="content">
            <div className="tables">
              <div className="table1">
                <table cellPadding={0}>
                  <tbody>
                    <tr>
                      <th colSpan={2}>
                        <a>
                          <FontAwesomeIcon
                            className="fa fa-qrcode"
                            style={{ marginRight: 25 }}
                          />{" "}
                          AGVS{" "}
                        </a>
                      </th>
                    </tr>
                    <tr id="light">
                      <td colSpan={2}>
                        <span> Requester </span>{" "}
                        <span>
                          {" "}
                          <a href="#">
                            <i
                              icon={faAngleDown}
                              className="fa fa-angle-down"
                              style={{ color: "white" }}
                            />
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr id="gray">
                      <td colSpan={2}>Direction</td>
                    </tr>
                    <tr id="light">
                      <td colSpan={2}>
                        Mission
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="fa fa-angle-down"
                          style={{ color: "white", marginLeft: 10 }}
                        />
                      </td>
                    </tr>
                    <tr id="gray">
                      <td colSpan={2}>Node</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="header1">
                <h3>Time Period</h3>
              </div>
              <div>
                <table className="table2" cellSpacing={20}>
                  <tbody>
                    <tr className="headerT2">
                      <th>
                        <span>Start time</span>{" "}
                        <a href="#">
                          <FontAwesomeIcon
                            className="fa fa-angle-down"
                            style={{ color: "#1c97ac", marginLeft: 10 }}
                          />
                        </a>
                      </th>
                      <th>End-time</th>
                      <th>Passed</th>
                      <th>Failed</th>
                      <th>Execution Time</th>
                    </tr>
                    <tr>
                      <td id="datetime">{datetime}</td>
                      <td id="datetime">{datetime}</td>
                      <td style={{ color: "green" }}>5</td>
                      <td style={{ color: "red" }}>1</td>
                      <td>41:00 ms</td>
                    </tr>
                    <tr>
                      <td id="datetime">{datetime}</td>
                      <td id="datetime">{datetime}</td>
                      <td style={{ color: "green" }}>5</td>
                      <td style={{ color: "red" }}>1</td>
                      <td>41:00 ms</td>
                    </tr>
                    <tr>
                      <td id="datetime">{datetime}</td>
                      <td id="datetime">{datetime}</td>
                      <td style={{ color: "green" }}>5</td>
                      <td style={{ color: "red" }}>1</td>
                      <td>41:00 ms</td>
                    </tr>
                    <tr style={{ borderBottom: "1pt solid white" }}>
                      <td id="datetime">{datetime} </td>
                      <td id="datetime"> {datetime}</td>
                      <td style={{ color: "green" }}>5</td>
                      <td style={{ color: "red" }}>1</td>
                      <td>41:00 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="msg">
              <br />
              <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
              <p>Success Message</p> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
