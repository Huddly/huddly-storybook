module.exports = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const svgr = await import('vite-plugin-svgr');

    return mergeConfig(config, {
      plugins: [
        svgr.default({
          svgrOptions: {
            exportType: 'default',
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: '**/*.svg?react',
        }),
      ],
      resolve: {
        alias: {
          src: '/src',
        },
      },
    });
  },
};
