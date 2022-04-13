const {resolve} = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        'storybook-readme',
        '@storybook/addon-knobs',
        '@storybook/addon-storysource',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    features: {
        babelModeV7: true,
    }
};
