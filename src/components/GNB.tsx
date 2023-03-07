import React, {useEffect, useRef} from "react";
import styled from "styled-components";

function GNB() {
  const observRef = useRef<IntersectionObserver | null>(null);
  const dateRef = useRef<HTMLElement>(null);
  const handleOnScroll = () => {
    console.log("success");
  };

  useEffect(() => {
    observRef.current = new IntersectionObserver(handleOnScroll);
    observRef.current.observe(dateRef.current!);
    return () => {
      if (observRef.current) observRef.current.disconnect();
    };
  });

  return (
    <>
      <GNBHeader>
        <GNBContainer>
          <LogoIcon>Kakao</LogoIcon>
          <GNBMenus>
            <MenuIcon>카카오</MenuIcon>
            <MenuIcon>뉴스</MenuIcon>
            <MenuIcon>기술과서비스</MenuIcon>
            <MenuIcon>약속과책임</MenuIcon>
          </GNBMenus>
        </GNBContainer>
      </GNBHeader>
      <span ref={dateRef}> test </span>
    </>
  );
}

export default GNB;

const GNBHeader = styled.div`
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid var(--colorBg1);
`;

const GNBContainer = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const LogoIcon = styled.span`
  font-size: 2rem;
  color: var(--colorFontBlack);
`;

const GNBMenus = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.span`
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--colorFontBlack);
  margin: 0 1rem;
`;