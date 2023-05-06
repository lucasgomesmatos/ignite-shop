import styled from 'styled-components';

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 656px;

  h1 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    color: ${(props) => props.theme.colors.gray100};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.xl};
    color: ${(props) => props.theme.colors.gray300};
    max-width: 560px;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.4;
  }

  a {
    margin-top: 5rem;
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.green500};
    display: block;
    text-decoration: none;
    font-weight: bold;

    :hover {
      color: ${(props) => props.theme.colors.green300};
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 130px;
  height: 145px;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  img {
    object-fit: cover;
  }
`;
