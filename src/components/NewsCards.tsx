import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import {FlexBox, FlexDiv} from "../styles/common";

interface NewsCardsProps {
  imgURL: string;
  width: string;
  height: string;
}

function NewsCards({imgURL, width, height}: NewsCardsProps) {
  return (
    <FlexDiv direction="column">
      <NewsContents src={imgURL} width={width} height={height}></NewsContents>
    </FlexDiv>
  );
}

export default NewsCards;

const NewsContents = styled.img<{
  width: string;
  height: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #ddd;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 1px 1px 5px 5px #ddd;
  }
`;
