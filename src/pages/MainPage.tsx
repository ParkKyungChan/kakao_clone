import React, {SetStateAction, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import NewsCards from "../components/NewsCards";
import {FlexDiv, FlexBox} from "../styles/common";
import sample from "../assets/sample.png";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
import sample4 from "../assets/sample4.png";
import sample5 from "../assets/sample5.png";
import {useMediaQuery} from "react-responsive";

function MainPage({setIsDateOn}: {setIsDateOn: React.Dispatch<SetStateAction<boolean>>}) {
  const [todayMonth, setTodayMonth] = useState(0);
  const [todayDate, setTodayDate] = useState(0);
  const observRef = useRef<IntersectionObserver | null>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOnScroll = (e: any) => {
    setIsDateOn(e[0].isIntersecting);
  };

  const Desktop = ({children}: {children: JSX.Element}) => {
    const isDesktop = useMediaQuery({minWidth: 992});
    return isDesktop ? children : null;
  };

  useEffect(() => {
    observRef.current = new IntersectionObserver(handleOnScroll, {
      rootMargin: "-100px 0px 0px 0px",
    });
    observRef.current.observe(dateRef.current!);
    return () => {
      if (observRef.current) observRef.current.disconnect();
    };
  });

  useEffect(() => {
    setTodayDate(new Date().getDate());
    setTodayMonth(new Date().getMonth());
  });

  const test = <div>테스트입니다</div>;

  return (
    <TestDiv ref={containerRef}>
      <TitleContainer direction="column" gap={"1rem"}>
        <CalendarIcon align="center" ref={dateRef}>
          <Calendar></Calendar>
          <MainTitle> 오늘의 카카오</MainTitle>
        </CalendarIcon>
        <MainTitle>
          {todayMonth + 1}월 {todayDate}일 소식입니다
        </MainTitle>
      </TitleContainer>
      <FlexDiv gap="20px">
        <NewsCards imgURL={sample} width="600px" height="670px" />
        <FlexDiv direction="column" gap="20px">
          <NewsCards imgURL={sample2} width="280px" height="370px" />
          <NewsCards imgURL={sample3} width="280px" height="170px" />
        </FlexDiv>
        <FlexDiv direction="column" gap="20px">
          <NewsCards imgURL={sample4} width="280px" height="170px" />
          <NewsCards imgURL={sample5} width="280px" height="370px" />
        </FlexDiv>
      </FlexDiv>
      <Desktop children={test}></Desktop>
    </TestDiv>
  );
}

export default MainPage;

const TestDiv = styled.div`
  position: relative;
  height: 3000px;
  top: 6rem;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 630px;
  }
  @media screen and (min-width: 1024px) {
    width: 952px;
  }
  @media screen and (min-width: 1440px) {
    width: 1296px;
  }
`;

export const CalendarIcon = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}>`
  ${props => FlexBox(props.direction, props.justify, props.align)}
`;

const MainTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "san-serif";
`;

const TitleContainer = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}>`
  ${props => FlexBox(props.direction, props.justify, props.align)};
  gap: 1rem;
  margin: 4rem 0;
`;
