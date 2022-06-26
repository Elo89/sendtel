import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
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
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}
