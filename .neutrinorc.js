const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');
const styles = require('@neutrinojs/style-loader');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb(),
    reactComponents(),
    jest(),
    styles({
      ruleId: 'scss',
      modules: false,
      // Override the default file extension of `.css` if needed
      test: /\.(css|sass|scss)$/,
      modulesTest: /\.module\.(css|sass|scss)$/,
      loaders: [
        // Define loaders as objects. Note: loaders must be specified in reverse order.
        // ie: for the loaders below the actual execution order would be:
        // input file -> sass-loader -> postcss-loader -> css-loader -> style-loader/mini-css-extract-plugin
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')],
          },
        },
        {
          loader: 'sass-loader',
          useId: 'sass',
          options: {

          },
        },
      ],
    }),

  ],
};
