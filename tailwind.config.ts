function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined)
      return `rgba(var(${varName}), ${opacityValue})`;
    else return `rgb(var(${varName}))`;
  };
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          secondary: withOpacity('--color-text-secondary'),
          inverted: withOpacity('--color-text-inverted'),
          theme: withOpacity('--color-text-inverted-theme'),
        },
      },
      backgroundColor: {
        skin: {
          background: withOpacity('--color-background'),
          'background-opacity': withOpacity('--color-background-opacity'),
          'accent-button': withOpacity('--color-button-accent'),
          'accent-buttonHover': withOpacity('--color-button-accent-hover'),
          'muted-button': withOpacity('--color-button-muted'),
          'muted-button-hover': withOpacity('--color-button-muted-hover'),
          'background-white': withOpacity('--color-background-white'),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity('--color-text-inverted-theme'),
          inverted: withOpacity('--color-background-white'),
        },
      },
      fill: {
        skin: {
          primary: withOpacity('--color-text-inverted-theme'),
          inverted: withOpacity('--color-background-white'),
        },
      },
      stroke: {
        skin: {
          primary: withOpacity('--color-text-inverted-theme'),
          inverted: withOpacity('--color-background-white'),
        },
      },
    },
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
      xxl: '1920px',
    },
  },
  plugins: [],
};
