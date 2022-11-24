import styled from "styled-components";

interface ContainerProps {
  smPadding?: string;
  mdPadding?: string;
  lgPadding?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: ${({ smPadding }) => smPadding ? smPadding : "80px 1rem"};

  @media screen and (min-width: 768px) {
    padding: ${({ mdPadding }) => mdPadding ? mdPadding : "100px 20px"};
  }

  @media screen and (min-width: 1024px) {
    padding: ${({ lgPadding }) => lgPadding ? lgPadding : "100px 2rem"};
  }
`

interface TitleProps {
  smSize?: string;
  mdSize?: string;
  lgSize?: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-family: var(--source-font);
  font-weight: 700;
  font-size: ${({ smSize }) => smSize ? smSize : "2.5rem"};
  width: ${({ smWidth }) => smWidth ? smWidth : "100%"};

  @media screen and (min-width: 768px) {
    font-size: ${({ mdSize }) => mdSize ? mdSize : "3rem"};
    width: ${({ mdWidth }) => mdWidth ? mdWidth : "100%"};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${({ lgSize }) => lgSize ? lgSize : "3.5rem"};
    width: ${({ lgWidth }) => lgWidth ? lgWidth : "100%"};
  }
`

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: var(--inter-font);
  color: ${({ theme }) => theme.colors.subtitle};

  @media screen and (min-width: 768px) {
    font-weight: 700;
  }
`

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
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
  font-family: var(--inter-font);
  font-weight: 600;

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