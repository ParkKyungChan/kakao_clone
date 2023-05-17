import React from "react";
// import {useNavigate} from "react-router-dom";
import styled from "styled-components";

interface RouteButtonProps {
  routingTarget: string;
  element: JSX.Element;
}

function RouteButton({routingTarget, element}: RouteButtonProps) {
  // const navigate = useNavigate();
  // return <RouteButtonContainer onClick={() => navigate(routingTarget)}>{element}</RouteButtonContainer>;
}

export default RouteButton;

const RouteButtonContainer = styled.div`
  cursor: pointer;
`;
