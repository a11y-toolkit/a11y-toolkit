magica11y
=========
> A suite of utility functions to detect accessibility features desired by the user

[![Travis](https://img.shields.io/travis/magica11y/magica11y.svg?style=for-the-badge "Build status")](https://travis-ci.org/magica11y/magica11y)
[![npm](https://img.shields.io/npm/v/magica11y.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/magica11y)
[![Coveralls](https://img.shields.io/coveralls/magica11y/magica11y.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/magica11y)
[![David](https://img.shields.io/david/magica11y/magica11y.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/magica11y)
[![David](https://img.shields.io/david/dev/magica11y/magica11y.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/magica11y?type=dev)
[![node](https://img.shields.io/node/v/magica11y.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/magica11y)
[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

## 🚀 Getting started

### 🏗 Installation

Install `magica11y` using `yarn` or `npm`…

```
$ yarn add magica11y  # OR
$ npm install --save magica11y
```

You can also install `magica11y` from a CDN, such as [jsDelivr](https://www.jsdelivr.com/package/npm/magica11y) or [unpkg](https://unpkg.com/magica11y@0.2.6/).

```html
<!-- Loads all the Magica11y modules -->
<script src="https://cdn.jsdelivr.net/npm/magica11y@latest/dist/magica11y.all.js"></script>
<!-- Loads only a single Magica11y module -->
<script src="https://cdn.jsdelivr.net/npm/magica11y@latest/dist/magica11y.prefersReducedMotion.js"></script>
```

### ⚗️ Usage

Import all `magica11y` modules in your JavaScript code…

```js
import { prefersReducedMotion, motionPreferences } from 'magica11y';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

If you installed `magica11y` via a `<script>` tag, then…

```html
<script>
  // If you installed all the Magica11y modules via `magica11y.all.js`, then…
  const motionPreference = window.magica11y.all.prefersReducedMotion();

  // If you installed only a single Magica11y module via `magica11y.prefersReducedMotion.js`, then…
  const motionPreference = window.magica11y.prefersReducedMotion();
</script>
```

## 🗼 API

### 🎢 `prefersReducedMotion()`

Detects user’s preferences for reduced motion using the [`'prefers-reduce-motion'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

```js
import prefersReducedMotion, { motionPreferences } from 'magica11y/prefersReducedMotion';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

The `motionPreferences` object contains all the possible values supported by the `'prefers-reduce-motion'` media query. The table below summarizes them.

| Return value                      | Media query value                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `motionPreferences.NO_PREFERENCE` | [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference) |
| `motionPreferences.REDUCE`        | [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce)               |
| `null`                            | Preference could not be determined.                                                                             |

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import prefersReducedMotion, { type MotionPreference } from 'magica11y/prefersReducedMotion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
```

🎩 **Note**: `prefersReducedMotion()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `MotionPreference` type. So using `?MotionPreference` is recommended.

### 🕯 `lightLevel()`

Detects user’s available light level using the [`'light-level'`](https://drafts.csswg.org/mediaqueries-5/#light-level) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

```js
import lightLevel, { availableLightLevels } from 'magica11y/lightLevel';

const availableLightLevel = lightLevel();
const darkMode = availableLightLevel === availableLightLevels.DIM;
```

The `availableLightLevels` object contains all the possible values supported by the `'light-level'` media query. The table below summarizes them.

| Return value                  | Media query value                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| `availableLightLevels.NORMAL` | [`'normal'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-normal) |
| `availableLightLevels.DIM`    | [`'dim'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-dim)       |
| `availableLightLevels.WASHED` | [`'washed'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-washed) |
| `null`                        | Preference could not be determined.                                                    |

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import lightLevel, { type LightLevel } from 'magica11y/lightLevel';

const availableLightLevel: ?LightLevel = lightLevel();
```

🎩 **Note**: `lightLevel()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `LightLevel` type. So using `?LightLevel` is recommended.

#### 📝 Documentation

* [macOS](https://support.apple.com/guide/mac-help/unac089/mac)
* [iOS](https://support.apple.com/en-lamr/HT202655)

## :scroll: License

See [LICENSE.md](LICENSE.md).
