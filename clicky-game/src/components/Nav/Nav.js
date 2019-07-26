import React from "react";
import "./Nav.css";

const Nav = props =>
  <ul className="nav nav-fill">
    <img src="https://www.logolynx.com/images/logolynx/c5/c571df5228a873a78445bf7b0fcf23d0.png" width="200px" height="10px" id="logo" class="d-inline-block align-top" alt=""></img>
    <li className="nav-item nav-text text-right">score: {props.currentScore} | high score: {props.highScore}</li>
  </ul>

export default Nav;