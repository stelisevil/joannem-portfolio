import React from "react";
import Link from "next/link";
import styled from "styled-components";

const TopNavContainer = styled.div`
  height: 200px;
  border: 1px solid green;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Navs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

const TopNav = () => (
  <TopNavContainer>
    <Title>
      <h1>Joanne McGarvie</h1>
    </Title>
    <Navs>
      <Link href="/work">
        <h2>Work</h2>
      </Link>
      <Link href="/about-me">
        <h2>About me</h2>
      </Link>
      <Link href="/contact">
        <h2>Contact</h2>
      </Link>
    </Navs>
  </TopNavContainer>
);

export default TopNav;
