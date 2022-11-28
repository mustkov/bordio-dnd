import { ITheme } from "./types";

const baseTheme: ITheme = {
  color: {
    main: "#222222",
    white: "#FFFFFF",
    black: "#000000",
    notice: "#F21247",
    gray: "#8C939F",
    grayLight: "#F5F8FA",
    mainColor: "#0F1D40",
    mainColorActive: "#2D4071",
    toolsActive: "#0094FF",
    colorSelect: "#F5F8FA",
    colorSelectOpen: "#E1E4E7",
    card_1: "#ABE9CE",
    card_2: "#D8DCFF",
    card_3: "#FFDFBA",
    card_4: "#FEC6B7",
    card_5: "#D9E6A2",
    card_6: "#F2BAE1",
    canceledCard: "#F0F0F0",
    canceledCardText: "#A5A5A5",
  },
  font: {
    tiny: "0.625rem",
    small: "0.8125rem",
    normal: "0.875rem",
    big: "1.125rem",
  },

  fontWeight: {
    normal: 400,
    bold: 500,
  },

  radius: {
    tiny: "4px",
    small: "8px",
    normal: "50px",
    big: "100px",
  },

  sizis: {
    menu: "219px",
  },

  duration: {
    normal: "250ms",
  },
};

export { baseTheme };
