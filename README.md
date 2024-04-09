# This is broken for the time being - esbuild-plugin-twig

ESBuild plugin to handle and build Twig files.

---

`CJS` and `ESM` available.

---

### `Install`

PNPM

```
pnpm i esbuild-plguin-sass
```

NPM

```
npm i esbuild-plugin-twig
```

Yarn

```
yarn add esbuild-plugin-twig
```

### `Usage TypeScript`

```TypeScript
import * as esbuild from 'esbuild'
import sassPlugin from 'esbuild-sass-twig'
import Twig from 'twig'

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

const esbuild = require('esbuild');
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
  src: string
  destination: string
}

```
