export interface ThemeType {
  colors: {
    light: {
      primary: string;
      background: string;
      error: string;
      success: string;
      disaled: string;
    };
    dark: {
      primary: string;
      background: string;
      error: string;
      success: string;
      disaled: string;
    };
  };
}
export const theme: ThemeType = {
  colors: {
    light: {
      primary: '#000',
      background: '#fff',
      error: '#F3AFAE',
      success: '#D4FEDD',
      disaled: '#989898',
    },
    dark: {
      primary: '#fff',
      background: '#000',
      error: '#A85661',
      success: '#76A653',
      disaled: '#989898',
    },
  },
};
