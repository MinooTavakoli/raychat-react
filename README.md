# RayChat Package For React

![raychat](https://github.com/MinooTavakoli/raychat-react/blob/main/public/raychat-logo.svg)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-size-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

#### The new online chat experience begins here!

You spend a lot of time and money to direct users to your site, but you easily lose these potential customers. Talk to users, know their needs, examine their behavior, and instill in them a good sense of specialness. Reicht has provided this platform for you.

- [Installation](#installation)
- [Usage](#USE)
- [Props](#Props)
- [License](#license)
- [Author](#author)

### Installation

> Get `token` from [raychat.io](https://raychat.io/signup)

```bash
npm i raychat-react
```

## USE Raychat Package

```js
import React from "react";
import RayChat from "raychat-react";

function App() {
  const token = "6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2";

  return (
    <div>
      <h1>This is a test</h1>
      <RayChat rayToken={token} />
    </div>
  );
}
```

## Props

| props    | defaultValue | description                                              |
| -------- | ------------ | -------------------------------------------------------- |
| rayToken | null         | Get `token` from [raychat.io](https://raychat.io/signup) |

### License

MIT

### Author

> Minoo Tavakoli

[license-image]: http://img.shields.io/npm/l/raychat-react.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/raychat-react
[npm-version-image]: http://img.shields.io/npm/v/raychat-react.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/raychat-react.svg?style=flat
[npm-downloads-size-image]: https://img.shields.io/bundlephobia/minzip/raychat-react.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/raychat-react?minimal=true
