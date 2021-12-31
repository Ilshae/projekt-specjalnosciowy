import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 550px;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }

    div {
      color: #e08800;
    }
  }

  @media screen and (max-width: 800px) {
    max-width: 400px;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
  @media screen and (max-width: 500px) {
    max-width: 500px;
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 450px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

AddButton.displayName = 'AddButton';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
