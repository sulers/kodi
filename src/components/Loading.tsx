import styled from "styled-components";
import { SyncLoader } from "react-spinners";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <SyncLoader color="#36D7B7" loading />
    </LoadingContainer>
  );
};

export default Loading;


