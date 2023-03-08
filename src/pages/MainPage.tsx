import React, {useEffect, useRef} from "react";
import styled from "styled-components";

function MainPage() {
  const observRef = useRef<IntersectionObserver | null>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOnScroll = (e: any) => {
    console.log(e[0].isIntersecting, e[0].isVisible);
  };

  useEffect(() => {
    observRef.current = new IntersectionObserver(handleOnScroll, {
      rootMargin: "-72px 0px 0px 0px",
    });
    observRef.current.observe(dateRef.current!);
    return () => {
      if (observRef.current) observRef.current.disconnect();
    };
  });

  return (
    <TestDiv ref={containerRef}>
      <CalendarIcon ref={dateRef}>
        <CalendarTop></CalendarTop>
        <CalendarBottom>{new Date().getDate()}</CalendarBottom>
      </CalendarIcon>
      <span> 오늘의 카카오</span>
      <span>3월 8일 화요일 소식입니다</span>
    </TestDiv>
  );
}

export default MainPage;

const TestDiv = styled.div`
  position: relative;
  top: 6rem;
`;

const CalendarIcon = styled.div`
  margin: 50px 50px;
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
  height: 43px;
  line-height: 40px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background: #d7d9d7;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 3px -1px #333;
`;
