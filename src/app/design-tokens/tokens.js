/**
 * Do not edit directly
 * Generated on Tue, 13 Jun 2023 16:35:23 GMT
 */

module.exports = {
  dimension: {
    scale: {
      value: "2",
      type: "dimension",
    },
    xs: {
      value: "4",
      type: "dimension",
    },
    sm: {
      value: "{dimension.xs} * {dimension.scale}",
      type: "dimension",
    },
    md: {
      value: "{dimension.sm} * {dimension.scale}",
      type: "dimension",
    },
    lg: {
      value: "{dimension.md} * {dimension.scale}",
      type: "dimension",
    },
    xl: {
      value: "{dimension.lg} * {dimension.scale}",
      type: "dimension",
    },
  },
  spacing: {
    xs: {
      value: "{dimension.xs}",
      type: "spacing",
    },
    sm: {
      value: "{dimension.sm}",
      type: "spacing",
    },
    md: {
      value: "{dimension.md}",
      type: "spacing",
    },
    lg: {
      value: "{dimension.lg}",
      type: "spacing",
    },
    xl: {
      value: "{dimension.xl}",
      type: "spacing",
    },
    "multi-value": {
      value: "{dimension.sm} {dimension.xl}",
      type: "spacing",
      description:
        "You can have multiple values in a single spacing token. Read more on these: https://docs.tokens.studio/available-tokens/spacing-tokens#multi-value-spacing-tokens",
    },
  },
  borderRadius: {
    sm: {
      value: "4px",
      type: "borderRadius",
    },
    lg: {
      value: "8px",
      type: "borderRadius",
    },
    xl: {
      value: "16px",
      type: "borderRadius",
    },
  },
  colors: {
    primary: {
      value: "#00B1CA",
      type: "color",
    },
    secondary: {
      value: "#c91800",
      type: "color",
    },
    "secondary-lighter": {
      value: "#d37063",
      type: "color",
    },
    "secondary-darker": {
      value: "#a31401",
      type: "color",
    },
    black: {
      value: "#000000",
      type: "color",
    },
    white: {
      value: "#ffffff",
      type: "color",
    },
    gray: {
      value: "#CCCCCC",
      type: "color",
    },
  },
  opacity: {
    low: {
      value: "10%",
      type: "opacity",
    },
    md: {
      value: "50%",
      type: "opacity",
    },
    high: {
      value: "90%",
      type: "opacity",
    },
  },
  fontFamilies: {
    heading: {
      value: "Inter",
      type: "fontFamilies",
    },
    body: {
      value: "Roboto",
      type: "fontFamilies",
    },
  },
  lineHeights: {
    heading: {
      value: "110%",
      type: "lineHeights",
    },
    body: {
      value: "140%",
      type: "lineHeights",
    },
  },
  letterSpacing: {
    default: {
      value: "0",
      type: "letterSpacing",
    },
    increased: {
      value: "150%",
      type: "letterSpacing",
    },
    decreased: {
      value: "-5%",
      type: "letterSpacing",
    },
  },
  paragraphSpacing: {
    h1: {
      value: "32",
      type: "paragraphSpacing",
    },
    h2: {
      value: "26",
      type: "paragraphSpacing",
    },
  },
  fontWeights: {
    headingRegular: {
      value: "Normal",
      type: "fontWeights",
    },
    headingBold: {
      value: "Bold",
      type: "fontWeights",
    },
    bodyRegular: {
      value: "Normal",
      type: "fontWeights",
    },
    bodyBold: {
      value: "Bold",
      type: "fontWeights",
    },
  },
  fontSizes: {
    h1: {
      value: "{fontSizes.h2} * 1.25",
      type: "fontSizes",
    },
    h2: {
      value: "{fontSizes.h3} * 1.25",
      type: "fontSizes",
    },
    h3: {
      value: "{fontSizes.h4} * 1.25",
      type: "fontSizes",
    },
    h4: {
      value: "{fontSizes.h5} * 1.25",
      type: "fontSizes",
    },
    h5: {
      value: "{fontSizes.h6} * 1.25",
      type: "fontSizes",
    },
    h6: {
      value: "{fontSizes.body} * 1",
      type: "fontSizes",
    },
    body: {
      value: "16",
      type: "fontSizes",
    },
    sm: {
      value: "{fontSizes.body} * 0.85",
      type: "fontSizes",
    },
    xs: {
      value: "{fontSizes.body} * 0.65",
      type: "fontSizes",
    },
  },
};
