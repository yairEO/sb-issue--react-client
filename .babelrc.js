const {resolve} = require('path');

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-decorators', {'legacy': true}],
        [
            'module-resolver',
            {
                cwd: 'babelrc',
                root: ['./'],
                alias: {
                    'hooks': './src/hooks',
                    'context': './src/context',
                    'hoc': './src/hoc',
                    'diagram': './src/diagram',
                    'events': './src/events',
                    'general': './src/general',
                    'table': './src/table',
                    'form': './src/form',
                    'filters': './src/filters',
                    'loaders': './src/loaders',
                    'tools': './src/tools',
             
                    'test': './test',
                    'storyhelpers': './.storybook',
                },
            },
        ],
    ],
    assumptions: {
        setPublicClassFields: true
    }
};
