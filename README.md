rd <div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="100" height="100" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# Webpack + Typescript + ToDo Web Application

# Getting started

```
git clone https://github.com/StanislawVictorovich/ToDo-TC-App.git
cd StanislawVictorovich
npm install
npm start
```
Then add the loader to your `webpack` config. For example:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /.js/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: `jshint-loader`,
            options: {...options}
          }
        ]
      }
    ]
  }
}
```


And run `webpack` via your preferred method.

## Build Only
```
npm run build:prod
```
## Requirements

This module requires a minimum of Webpack v4.0.0.
