import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      onSurface: string;
      surface: string;
      background: string;
      darkerSurface: string;
    };
  }
}
