interface ITheme {
  color: {
    main: string;
    white: string;
    black: string;
    gray: string;
    notice: string;
    grayLight: string;
    mainColor: string;
    mainColorActive: string;
    colorSelectOpen: string;
    colorSelect: string;
    toolsActive: string;
    card_1: string;
    card_2: string;
    card_3: string;
    card_4: string;
    card_5: string;
    card_6: string;
    canceledCard: string;
    canceledCardText: string;
  };

  font: {
    tiny: string;
    small: string;
    normal: string;
    big: string;
  };

  fontWeight: {
    normal: number;
    bold: number;
  };

  radius: {
    tiny: string;
    small: string;
    normal: string;
    big: string;
  };

  sizis: {
    menu: string;
  };

  duration: {
    normal: string;
  };
}

export type { ITheme };
