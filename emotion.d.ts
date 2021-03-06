import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      onSurface: string;
      surface: string;
      background: string;
      darkerSurface: string;
      borderColor: string;
      buttonContainer: string;
    };
  }
}

declare module "*.gltf" {
  const content: any;
  export default content;
}
