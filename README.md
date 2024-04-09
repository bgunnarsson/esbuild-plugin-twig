# esbuild-plugin-twig

ESBuild plugin to handle and build Twig files.

---

`CJS` and `ESM` available.

---

### `Installation`

PNPM

```
pnpm i twig esbuild-plguin-twig
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
import twigPlugin from 'esbuild-sass-twig'

esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'bundle.js',
    plugins: [
        twigPlugin({
            twig: Twig
            src: 'src/twig',
            desitnation: 'public'
        })
    ],
  })
  .catch((e) => console.error(e.message));
```

### `Usage CJS`

```JavaScript

const twigPlugin = require('esbuild-plugin-twig');
const Twig = require('twig')

esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'bundle.js',
    plugins: [
        twigPlugin({
            twig: Twig,
            src: 'src/twig',
            desitnation: 'public'
        })
    ],
  })
  .catch((e) => console.error(e.message));
```


### `Options`

``` TypeScript
interface ITwigPluginOptions {
    twig: any
    src: string
    destination: string
}

```
