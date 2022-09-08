import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  framework: '@storybook/react',
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};

export default config;
