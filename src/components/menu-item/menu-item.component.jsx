import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle
} from "./menu-item.styles";

export const MenuItem = ({ title, image, history, linkUrl, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer className="background-image" image={image} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
