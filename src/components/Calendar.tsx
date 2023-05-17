import React from "react";
import styled from "styled-components";

function Calendar() {
  return (
    <CalendarBox>
      <CalendarTop></CalendarTop>
      <CalendarBottom>{new Date().getDate()}</CalendarBottom>
    </CalendarBox>
  );
}

export default Calendar;

const CalendarBox = styled.div`
  margin-right: 1rem;
`;

const CalendarTop = styled.div`
  width: 58px;
  height: 20px;
  margin-bottom: 1px;
  background: #e0204e;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 2px 3px -1px #333;
  &::after {
    content: "";
    display: block;
    position: relative;
    left: 41px;
    top: -1px;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: white;
    box-shadow: 2px 2px 3px -1px #333;
  }
  &::before {
    content: "";
    display: block;
    position: relative;
    left: 10px;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: white;
    box-shadow: 2px 2px 3px -1px #333;
  }
`;
const CalendarBottom = styled.div`
  width: 58px;
  height: 40px;
  line-height: 40px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background: #d7d9d7;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 3px -1px #333;
`;
