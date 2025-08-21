import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,  // Mở rộng controls panel
      sort: 'requiredFirst'
    },
    actions: { argTypesRegex: '^on[A-Z].*' }
  },
};
export default preview;