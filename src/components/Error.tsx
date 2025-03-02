import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Error = ({ message }:{message: string}) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
