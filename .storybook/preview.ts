import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyles } from "../src/styles";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];
export default preview;
