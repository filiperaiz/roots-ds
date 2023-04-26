export default {
  colors: {
    primary: {
      100: '#ecf5ff',
      200: '#a7e0ff',
      300: '#00a5ff',
      400: '#1172eb',
      500: '#0652b0',
      600: '#070047'
    },
    danger: {
      100: '#fef3f2',
      200: '#fecdca',
      300: '#f04a55',
      400: '#eb0042',
      500: '#8d0b2f',
      600: '#5f1d22'
    },
    success: {
      100: '#ecfdf3',
      200: '#a6f4c5',
      300: '#32d583',
      400: '#0f8755',
      500: '#186035',
      600: '#184a29'
    },
    warning: {
      100: '#fffaeb',
      200: '#fedf89',
      300: '#fdb022',
      400: '#c35516',
      500: '#9e3d05',
      600: '#7a2e0e'
    },
    neutral: {
      100: '#f9f9f9',
      200: '#eeeeee',
      300: '#c6c6c6',
      400: '#767676',
      500: '#4f4f4f',
      600: '#131516'
    },
    base: {
      white: '#ffffff',
      black: '#222222'
    },
    brand: {
      red: '#F04A55',
      blue: '#00A5FF',
      gray: '#4F4F4F'
    }
  },
  font: {
    family: {
      body: 'Source Sans Pro, sans-serif',
      heading: 'Roboto, sans-serif'
    },
    sizes: {
      xxxs: '12px',
      xxs: '14px',
      xs: '16px',
      sm: '20px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
      xxxl: '64px'
    },
    weight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      default: '100%',
      xs: '115%',
      sm: '120%',
      md: '133%',
      lg: '150%',
      xl: '170%',
      xxl: '200%'
    }
  },
  spacing: {
    min: '4px',
    nano: '8px',
    xxxs: '16px',
    xxs: '24px',
    xs: '32px',
    sm: '40px',
    md: '48px',
    lg: '56px',
    xl: '64px',
    xxl: '80px',
    xxxl: '120x'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  border: {
    radius: {
      none: '0px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      pill: '500px',
      circle: '50%'
    },
    width: {
      none: '0px',
      sm: '1px',
      md: '2px',
      lg: '4px'
    }
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    sm: '0px 4px 8px rgba(115, 115, 115, 0.16)',
    md: '0px 8px 24px rgba(115, 115, 115, 0.16)',
    lg: '0px 16px 32px rgba(115, 115, 115, 0.16)'
  }
} as const
