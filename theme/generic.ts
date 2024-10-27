export interface GenericStyle {
  fontSize: {
    base: number;
    small: number;
    headingDefault: number;

    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H1: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H2: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H3: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H4: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H5: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H6: number;
    sectionHeader: number;
  };
  lineHeight: {
    base: number;
    small: number;

    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H1: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H2: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H3: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H4: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H5: number;
    /** @deprecated Use `typography/Heading.tsx` until Figma is not consistent w/ heading styles */
    H6: number;
  };
  containerMargin: number;
}

export const generic: GenericStyle = {
  fontSize: {
    base: 16,
    small: 12,
    headingDefault: 24,

    H1: 40,
    H2: 32,
    H3: 28,
    H4: 24,
    H5: 20,
    H6: 16,
    sectionHeader: 14,
  },
  lineHeight: {
    base: 24,
    small: 20,

    H1: 52,
    H2: 40,
    H3: 32,
    H4: 28,
    H5: 28,
    H6: 24,
  },
  containerMargin: 20,
};
