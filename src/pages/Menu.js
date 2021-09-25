import React from "react";
import "./Menu.css";
import logo from "../assets/images/title.png";

import {
  faArrowLeft,
  faBatteryFull,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryThreeQuarters,
  faCheckCircle,
  faCircleNotch,
  faCog,
  faDesktop,
  faEye,
  faLock,
  faPowerOff,
  faQrcode,
  faSearch,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Menu() {
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
                <FontAwesomeIcon icon={faQrcode} /> Dashbord{" "}
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faQrcode} /> AGVS
              </a>
            </li>
            <li>
              <a href="/details">
                <FontAwesomeIcon icon={faEye} /> Global Vision{" "}
              </a>
            </li>
            <li>
              <a href="/details">
                <FontAwesomeIcon icon={faDesktop} /> Monitoring{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="settings">
          <a href="#">
            <FontAwesomeIcon icon={faCog} /> Setting{" "}
          </a>
          <a href="/login">
            <FontAwesomeIcon icon={faPowerOff} /> Logout{" "}
          </a>
        </div>
      </div>
      <div className="main">
        <div className="navbar">
          <div className="arrow">
            <a href="#">
              <FontAwesomeIcon icon={faArrowLeft} />
            </a>
            <h3 style={{ color: "white" }} className="selected-option">
              Hello
            </h3>
          </div>
          <div className="avatar">
            <FontAwesomeIcon
              className="fa fa-user-circle-o fa-2x"
              icon={faUserCircle}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="toolbar">
          <div className="sb-example-1">
            <div className="search">
              <input
                type="text"
                style={{
                  backgroundColor: "rgba(255,255,255,15%)",
                  color: "#1c97ac",
                  borderRadius: 15,
                  fontSize: "larger",
                  opacity: "50%",
                }}
                defaultValue="Search"
                placeholder="Search"
              />
              <button
                style={{ marginLeft: 10, borderRadius: 15 }}
                type="submit"
                className="searchButton"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
            <button type="button">hello</button>
          </div>
        </div>
        <div className="table">
          <table cellSpacing={0} cellPadding={0}>
            <tbody>
              <tr>
                <th>Robot Name</th>
                <th>Availability</th>
                <th>Location</th>
                <th>Battery</th>
                <th>AverageProduction</th>
                <th>Unloading Time</th>
              </tr>
              <tr id="tr-black">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>zeta#32</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faBatteryFull}
                    aria-hidden="true"
                  />
                </td>
                <td>54K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
              <tr id="tr-gray">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    className="fa fa-check-circle-o"
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>warehouse2</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    className="fa fa-battery-three-quarters"
                    icon={faBatteryThreeQuarters}
                    aria-hidden="true"
                  />
                </td>
                <td>21K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
              <tr id="tr-black">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    className="fa fa-check-circle-o"
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>zeta#32</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "red" }}
                    className="fa fa-battery-quarter"
                    icon={faBatteryQuarter}
                    aria-hidden="true"
                  />
                </td>
                <td>21K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
              <tr id="tr-gray">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    className="fa fa-check-circle-o"
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>warehouse2</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    className="fa fa-battery-half"
                    icon={faBatteryHalf}
                    aria-hidden="true"
                  />
                </td>
                <td>21K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
              <tr id="tr-black">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    className="fa fa-check-circle-o"
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>warehouse2</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    className="fa fa-battery-half"
                    icon={faBatteryHalf}
                    aria-hidden="true"
                  />
                </td>
                <td>21K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
              <tr id="tr-gray">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    className="fa fa-check-circle-o"
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>warehouse2</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    className="fa fa-battery-half"
                    icon={faBatteryHalf}
                    aria-hidden="true"
                  />
                </td>
                <td>21K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
              <tr id="tr-black">
                <td>Avg-12515</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    className="fa fa-check-circle-o"
                    icon={faCheckCircle}
                    aria-hidden="true"
                  />
                </td>
                <td>warehouse2</td>
                <td>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    className="fa fa-battery-half"
                    icon={faBatteryHalf}
                    aria-hidden="true"
                  />
                </td>
                <td>21K</td>
                <td>
                  <FontAwesomeIcon
                    className="fa fa-circle-o-notch fa-spin"
                    icon={faCircleNotch}
                    style={{ fontSize: 24 }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
