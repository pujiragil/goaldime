import Link from "next/link";
import { MouseEventHandler, useState } from "react";
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
    padding: 1rem 2rem;
  }
`;

const NavIcon = styled.img`
  width: auto;
  height: 28px;
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

interface NavMenuProps {
  open: boolean;
}

const NavMenu = styled.div<NavMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.4s ease-in;
  background-color: #5b93ff;
  width: 100%;
  height: calc(100vh - 100%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 5;

  @media screen and (min-width: 1024px) {
    transform: unset;
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
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  width: fit-content;
  color: #fbfbfb;

  @media screen and (min-width: 1024px) {
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      opacity: 1;
    }
  }
`;

const Dropdown = styled.div`
  position: relative;
  font-size: 18px;
`;

interface DropdownToggleProps {
  active: boolean;
}

const DropdownToggle = styled.div<DropdownToggleProps>`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #fbfbfb;
  width: fit-content;

  & > span {
    display: block;
    width: 12px;
    height: 8px;
    background-image: url("/dropdown-white.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 1024px) {
    opacity: ${({ active }) => (active ? 1 : 0.7)};
    color: ${({ theme }) => theme.colors.primary};

    & > span {
      background-image: url("/dropdown-black.svg");
    }

    &:hover {
      opacity: 1;
    }
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    position: absolute;
    background: #fbfbfb;
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid #e6e6ea;
    top: 40px;
    width: 150px;
    gap: 0.5rem;
  }
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

export default function Navbar() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => setIsDropdown((prev) => !prev);
  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <Nav>
      <NavIcon src="goaldime.svg" />
      <NavToggle src="hamburger.svg" onClick={handleOpen} />

      <NavMenu open={isOpen}>
        <NavLink href={""} text={"Home"} />
        <NavDropdown onDropdown={handleDropdown} dropdown={isDropdown} />
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

interface NavDropdownProps {
  onDropdown: MouseEventHandler;
  dropdown: boolean;
}

const NavDropdown = ({ onDropdown, dropdown }: NavDropdownProps) => {
  return (
    <Dropdown>
      <DropdownToggle onClick={onDropdown} active={dropdown}>
        Features
        <span></span>
      </DropdownToggle>

      {dropdown && (
        <DropdownMenu>
          <NavLink href={""} text={"Menu 1"} />
          <NavLink href={""} text={"Menu 2"} />
          <NavLink href={""} text={"Menu 3"} />
        </DropdownMenu>
      )}
    </Dropdown>
  );
};
