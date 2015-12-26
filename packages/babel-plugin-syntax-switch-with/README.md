# babel-plugin-syntax-switch-with

Allow parsing of switch with.

## Installation

```sh
$ npm install babel-plugin-syntax-switch-with
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["syntax-switch-with"]
}
```

### Via CLI

```sh
$ babel --plugins syntax-switch-with script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["syntax-switch-with"]
});
```
