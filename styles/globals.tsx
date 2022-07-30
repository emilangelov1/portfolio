import {
  css,
  Global,
  useTheme,
} from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow-x: hidden;
          font-family: -apple-system,
            BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          width: 10px;
          background-color: ${theme.color
            .background};
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${theme.color
            .surface};
          border-radius: 4px;
          transition: all 0.3s ease-in-out;
          border: 1px solid
            rgba(255, 255, 255, 0.2);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgb(59, 59, 59, 0.7);
        }

        * {
          box-sizing: border-box;
          transition: color 0.3s ease-in-out,
            background-color 0.3s ease-in-out;
        }
      `}
    />
  );
};
