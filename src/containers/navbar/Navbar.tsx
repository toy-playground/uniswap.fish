import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { ScreenWidth } from "../../utils/styled";
import Announcement from "./Announcement";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  width: 100vw;
  top: 0;
  z-index: 9999;

  @media only screen and (max-width: ${ScreenWidth.TABLET}px) {
    padding: 15px;
  }
`;

const Logo = styled.h1`
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > span:nth-child(1) {
    font-size: 1.4rem;
    margin-right: 7px;

    @media only screen and (max-width: 450px) {
      font-size: 1.8rem;
    }
  }

  & > span:nth-child(2) {
    color: white;
    font-size: 1.2rem;
    font-weight: 500;

    @media only screen and (max-width: 450px) {
      display: none;
    }
  }
`;

const Menubar = styled.div`
  display: flex;
  align-items: center;
`;

const Twitter = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  margin-right: 15px;

  &:hover {
    color: #1f9cea;
    transform: scale(1.25) rotate(18deg);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <span>🦄</span> <span>UniswapCalculator</span>
      </Logo>
      <Menubar id="menubar-container">
        <Twitter
          href="https://twitter.com/uniswapdotfish"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Twitter>
        <Announcement />
      </Menubar>
    </NavbarContainer>
  );
};

export default Navbar;
