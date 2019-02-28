<div align="center">
  <a href="https://github.com/StanislawVictorovich/ToDo-TC-App">
    <img width="150" height="150" src="https://mbtskoudsalg.com/images/checklist-3d-png-4.png">
  </a>
</div>

# ToDo Web Application (TypeScript)

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
    devtool: '#source-map',

    entry: [
        './src/index.ts',
        './src/css/style.css'
    ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/js/bundle.js'
    },

```


And run `webpack` via your preferred method.

## Build Only
```
npm run build
```
## Requirements

This module requires a minimum of Webpack v2.7.1.
