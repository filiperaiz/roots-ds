/* eslint-disable prettier/prettier */
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
    family: 'Atkinson Hyperlegible, sans-serif',
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px'
    },
    display: {
      xs: '24px',
      sm: '30px',
      md: '36px',
      lg: '48px',
      xl: '60px',
      xxl: '72px'
    },
    weight: {
      regular: 400,
      bold: 700
    },
    lineHeight: {
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
    's0': '0px',
    's2': '2px',
    's4': '4px',
    's8': '8px',
    's12': '12px',
    's16': '16px',
    's20': '20px',
    's32': '32px',
    's40': '40px',
    's48': '48px',
    's64': '64px',
    's80': '80px',
    's96': '96px',
    's128': '128px',
    's160': '160px',
    's192': '192px',
    's224': '224px',
    's256': '256px'
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
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      round: '999px',
      circle: '50%'
    },
    width: {
      none: '0px',
      sm: '1px',
      md: '2px',
      lg: '4px',
      xl: '8px'
    }
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    sm: '0px 1px 3px rgba(19, 21, 22, 0.1), 0px 1px 2px rgba(19, 21, 22, 0.06)',
    md: '0px 4px 8px -2px rgba(19, 21, 22, 0.1), 0px 2px 4px -2px rgba(19, 21, 22, 0.06)',
    lg: '0px 12px 16px -4px rgba(19, 21, 22, 0.08), 0px 4px 6px -2px rgba(19, 21, 22, 0.03)',
    xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08),0px 8px 8px -4px rgba(16, 24, 40, 0.03)'
  }
} as const
