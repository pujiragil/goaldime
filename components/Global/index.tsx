import styled from "styled-components";

interface ContainerProps {
  textAlign?: string;
  gap?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 1rem;
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  gap: ${({ gap }) => gap ? gap : "60px"};
`

interface TitleProps {
  fontSize?: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize ? fontSize : "40px"};
`

interface ButtonProps {
  padding?: string;
  background?: string;
  color?: string;
  fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  border-radius: 999px;
  padding: ${({ padding }) => padding ? padding : "24px 30px"};
  background: ${({ background, theme }) => background ? background : theme.colors.secondary};
  color: ${({ color }) => color ? color : "#FFF"};
  font-size: ${({ fontSize }) => fontSize ? fontSize : "18px"};
`