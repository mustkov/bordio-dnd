import "styled-components";
import { ITheme } from "./assets/theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
