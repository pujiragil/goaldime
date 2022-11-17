import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  padding: 20px 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6ea;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    padding: 30px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 2rem;
  }
`;

const NavIcon = styled.img`
  width: auto;
  height: 25px;
  object-fit: cover;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 36px;
  }
`;

const NavToggle = styled(NavIcon)`
  width: 24px;
  height: 24px;
  object-fit: cover;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  background-color: #5b93ff;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    position: static;
    width: fit-content;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
  }
`;

const LinkItem = styled.a`
  border-bottom: 1px solid transparent;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  width: fit-content;
  color: #fbfbfb;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (min-width: 1024px) {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fbfbfb;
  font-size: 18px;
  gap: 4px;
  cursor: pointer;

  & > img {
    width: 12px;
    height: 6px;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  background: #fbfbfb;
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid #e6e6ea;
  top: 40px;
  width: 150px;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const NavButtonWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

interface NavButtonProps {
  primary: boolean;
}

const NavButton = styled.button<NavButtonProps>`
  padding: 10px 20px;
  color: ${({ primary }) => (primary ? "#FBFBFB" : "#0F0F0F")};
  background: ${({ primary }) => (primary ? "#5B93FF" : "transparent")};
  border: 1px solid #5b93ff;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
`;

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <LinkItem>{text}</LinkItem>
    </Link>
  );
};

export default function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => setIsDropdown((prev) => !prev);

  return (
    <Nav>
      <NavIcon src="goaldime.svg" />
      <NavToggle src="hamburger.svg" />

      <NavMenu>
        <NavLink href={""} text={"Home"} />

        <NavDropdown onClick={handleDropdown}>
          Features
          <img src="dropdown.svg" alt="dropdown" />
          {isDropdown && (
            <Dropdown>
              <NavLink href={""} text={"Menu One"} />
              <NavLink href={""} text={"Menu Two"} />
              <NavLink href={""} text={"Menu Three"} />
            </Dropdown>
          )}
        </NavDropdown>

        <NavLink href={""} text={"Pricing"} />
        <NavLink href={""} text={"Contact"} />
      </NavMenu>

      <NavButtonWrapper>
        <NavButton primary={false}>Log In</NavButton>
        <NavButton primary={true}>Sign Up</NavButton>
      </NavButtonWrapper>
    </Nav>
  );
}
