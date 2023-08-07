import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hello from "../assets/hello.gif";
import Logout from "./Logout";


export default function Welcome() {

const userName = JSON.parse(
  localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
).username;

  return (
    <Container>
      <div>
      <div className="chat-header">
        <Logout />
      </div>
      <img src={hello} alt="hello" />
      <div className="WellcomeUserDiv">
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
      </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
    border: 2px solid white;
    padding: 10px;
    border-radius: 30px;
    padding-bottom: 15px;
  }
  span {
    color: white;
  }
  .WellcomeUserDiv{
    text-align:center;
    margin-top:20px;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    margin-left: 325px;
    margin-bottom: 10px;
  }
`;
