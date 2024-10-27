export interface GenericStyle {
  fontSize: {
    base: number;
    small: number;
    headingDefault: number;
  };
  containerMargin: number;
}

export const generic: GenericStyle = {
  fontSize: {
    base: 16,
    small: 12,
    headingDefault: 24,
  },

  containerMargin: 20,
};
