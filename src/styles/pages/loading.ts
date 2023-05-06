import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.gray900};
`;
