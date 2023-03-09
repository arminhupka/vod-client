import { ReactElement } from "react";

import {
  StyledHeading,
  StyledItemWrapper,
  StyledWrapper,
} from "./CourseDetailsSidebar.styles";

const CourseDetailsSidebar = (): ReactElement => (
  <StyledWrapper>
    <StyledItemWrapper>
      <StyledHeading>Dla kogo jest kurs</StyledHeading>
      <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </StyledItemWrapper>
    <StyledItemWrapper>
      <StyledHeading>Wymagania</StyledHeading>
      <ul style={{ paddingLeft: 0, listStylePosition: "inside" }}>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </StyledItemWrapper>
  </StyledWrapper>
);

export default CourseDetailsSidebar;
