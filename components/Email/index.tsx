import styled from "styled-components";
import { Container } from "../Global";

const EmailWrapper = styled.main`
  padding: 60px 0;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 40px;
  align-items: center;
  text-align: center;
`;

const ContentTitle = styled.h2`
  font-family: var(--source-font);
  font-weight: 700;
  font-size: 40px;
  color: #fbfbfb;
`;

const ContentDesc = styled.p`
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 18px;
  color: #fbfbfb;
`;

const EmailForm = styled.form`
  padding: 0 1rem;
`;

const FormLabel = styled.label`
  background: #fbfbfb;
  border-radius: 999px;
  display: flex;
  align-items: center;
`;

const FormInput = styled.input`
  font-family: var(--inter-font);
  font-size: 12px;
  font-weight: 400;

  &[type="email"] {
    border-radius: 999px;
    padding: 1rem 20px;
    outline: none;
    border: none;
    width: 100%;
  }

  &[type="submit"] {
    background: #0047d0;
    color: #fbfbfb;
    padding: 1rem 22px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 999px;
  }
`;

export default function Email() {
  return (
    <Container smPadding="100px 16px">
      <EmailWrapper>
        <EmailContent>
          <ContentTitle>Sign up for our newsletter</ContentTitle>
          <ContentDesc>
            Don’t worry we reserve our newsletter for important news so we only
            send a few updatesa year
          </ContentDesc>
        </EmailContent>
        <EmailForm>
          <FormLabel>
            <FormInput type={"email"} placeholder="Your email address" />
            <FormInput type={"submit"} value="Subscribe" />
          </FormLabel>
        </EmailForm>
      </EmailWrapper>
    </Container>
  );
}
