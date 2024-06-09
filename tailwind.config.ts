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
          overlay: withOpacity('--color-overlay'),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity('--color-text-inverted-theme'),
          inverted: withOpacity('--color-background-white'),
          grey: withOpacity('--color-border-grey'),
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
          'base-text': withOpacity('--color-text-base'),
          primary: withOpacity('--color-text-inverted-theme'),
          inverted: withOpacity('--color-background-white'),
        },
      },
      keyframes: {
        after: {
          content: '""',
          position: 'absolute',
          bottom: '-5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '10px',
          height: '10px',
          'background-color': 'white',
          'border-radius': '50%',
        },
      },
    },
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      md2: '950px',
      lg: '1200px',
      xl: '1440px',
      xxl: '1920px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-after-bottom::before': {
          content: '""',
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--color-background-white-after)',
          borderRadius: '50%',
        },
        '.custom-after-right::after': {
          content: '""',
          position: 'absolute',
          left: '-16px',
          top: '42%',
          transform: 'translate(-50%)',
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--color-background-white-after)',
          borderRadius: '50%',
        },
      });
    },
  ],
};
