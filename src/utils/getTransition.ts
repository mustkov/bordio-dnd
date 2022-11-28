import { css } from "styled-components";

const getTransition = (
  duration: string,
  property: string[] | string = "all",
  animation = "linear"
) =>
  css`
    transition-property: ${Array.isArray(property)
      ? property.join(", ")
      : property};
    transition-duration: ${duration};
    transition-timing-function: ${animation};
  `;

export { getTransition };
