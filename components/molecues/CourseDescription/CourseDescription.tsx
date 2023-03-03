import { ReactElement } from "react";
import {
  StyledDescription,
  StyledHeading,
  StyledWrapper,
} from "./CourseDescription.styles";

const CourseDescription = (): ReactElement => (
  <StyledWrapper>
    <StyledHeading>Opis</StyledHeading>
    <StyledDescription>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
      consectetur doloremque enim iusto laboriosam nesciunt nostrum odio
      officia, pariatur perspiciatis, quam quasi quos repellat rerum tempora
      tenetur voluptate! Ad alias at, autem cupiditate dicta doloremque earum
      eligendi inventore ipsam ipsum magnam maxime minima neque nesciunt numquam
      obcaecati porro quas quibusdam quis quos sapiente similique temporibus
      voluptatem? Beatae, dolores eligendi illum necessitatibus possimus quis
      voluptatibus. Aliquam delectus, error illum nam numquam quis quo quos
      veritatis. Amet asperiores at atque commodi consectetur dicta ea esse et
      fuga iusto laboriosam nam nesciunt nobis, praesentium quasi ratione
      recusandae, rerum temporibus voluptas voluptatibus. Adipisci atque
      consectetur consequatur eius fugiat, ipsam labore numquam perferendis
      voluptatem. Accusamus illo quasi sint. Assumenda dolor fugiat, laborum
      laudantium minus molestias.
    </StyledDescription>
  </StyledWrapper>
);

export default CourseDescription;
