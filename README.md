# esbuild-plugin-twig

ESBuild plugin to handle and build Twig files.

---

`CJS` and `ESM` available.

---

### `Installation`

PNPM

```
pnpm i twig esbuild-plugin-twig
```

NPM

```
npm i twig esbuild-plugin-twig
```

Yarn

```
yarn add twig esbuild-plugin-twig
```

### `Usage ESM`

```TypeScript
import Twig from 'twig'
import { twigPlugin } from "esbuild-plugin-twig";

esbuild
  .build({
    plugins: [
        twigPlugin({
            twig: Twig,
            src: 'src/twig',
            destination: 'public',
        })
    ],
  })
  .catch((e) => console.error(e.message));
```

### `Usage CJS`

```JavaScript

const { twigPlugin } = require('esbuild-plugin-twig');
const Twig = require('twig')

esbuild
  .build({
    plugins: [
        twigPlugin({
            twig: Twig,
            src: 'src/twig',
            destination: 'public',
        })
    ],
  })
  .catch((e) => console.error(e.message));
```


### `Options`

| Option        | Type                  | Default       | Required |
| ------------- | --------------------- | ------------- | -------- |
| twig          | Imported twig package | Empty         | yes      |
| src           | string                | src/twig      | no       |
| destination   | string                | public        | no       |
