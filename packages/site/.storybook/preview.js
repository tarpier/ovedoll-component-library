// import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
const newViewports = {
  iPhone5: {
    name: 'iPhone 5',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  iPhone6: {
    name: 'iPhone 6/7/8',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  iPhonePlus: {
    name: 'iPhone 6/7/8 Plus',
    styles: {
      width: '414px',
      height: '736px'
    }
  },
  tailwindSm: {
    name: 'tailwind sm',
    styles: {
      width: '640px',
      height: '963px'
    }
  },
  tailwindMd: {
    name: 'tailwind md',
    styles: {
      width: '768px',
      height: '963px'
    }
  },
  tailwindLg: {
    name: 'tailwind lg',
    styles: {
      width: '1024px',
      height: '963px'
    }
  },
  tailwindXl: {
    name: 'tailwind xl',
    styles: {
      width: '1280px',
      height: '963px'
    }
  },
  tailwind2xl: {
    name: 'tailwind 2xl',
    styles: {
      width: '1536px',
      height: '963px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  viewport: {
    viewports: newViewports // newViewports would be an ViewportMap. (see below for examples)
    // defaultViewport: 'someDefault',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
