import styled from 'styled-components';

export const CollectionPreviewContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: #e08800;
  }
`;

TitleContainer.displayName = 'TitleContainer';

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 250px 250px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 250px;
  }
`;
