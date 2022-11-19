import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 1rem;

  @media screen and (min-width: 768px) {
    padding: 100px 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 100px 2rem;
  }
`

interface TitleProps {
  smSize?: string;
  mdSize?: string;
  xlSize?: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ smSize }) => smSize ? smSize : "2.5rem"};
  width: ${({ smWidth }) => smWidth ? smWidth : "100%"};

  @media screen and (min-width: 768px) {
    font-size: ${({ mdSize }) => mdSize ? mdSize : "3rem"};
    width: ${({ mdWidth }) => mdWidth ? mdWidth : "100%"};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${({ xlSize }) => xlSize ? xlSize : "3.5rem"};
    width: ${({ lgWidth }) => lgWidth ? lgWidth : "100%"};
  }
`

interface ButtonProps {
  padding?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  mdWidth?: string; 
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 999px;
  width: fit-content;
  padding: ${({ padding }) => padding ? padding : "24px 30px"};
  background: ${({ background, theme }) => background ? background : theme.colors.secondary};
  color: ${({ color }) => color ? color : "#FFF"};
  font-size: ${({ fontSize }) => fontSize ? fontSize : "18px"};

  &.btn-show {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: ${({ mdWidth }) => mdWidth ? mdWidth : "fit-content"};
  }

  @media screen and (min-width: 1024px) {
    &.btn-show {
      display: block;
    }

    &.btn-hidden {
      display: none;
    }
  }
`

interface CircleProps {
  smSize?: string;
  mdSize?: string;
}

export const Circle = styled.span<CircleProps>`
  width: ${({ smSize }) => smSize ? smSize : "44px"}; 
  height: ${({ smSize }) => smSize ? smSize : "44px"};
  border-radius: 100%; 
  background: #F0F5FF;
  display: block;

  @media screen and (min-width: 768px) {
    height: ${({ mdSize }) => mdSize ? mdSize : "78px"};
    width: ${({ mdSize }) => mdSize ? mdSize : "78px"};
  }
`