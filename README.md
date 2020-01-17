# react-scroll-progress-bar

React Component for a fixed scroll progress bar. 📈

## Install

```npm
npm install react-scroll-progress-bar
```

## Default **Progress Bar**:

This is all you need to get the default view working:

```jsx
import React from "react";
import ProgressBar from "react-scroll-progress-bar"; // Add this line

export const App = () => (
  <>
    <ProgressBar />
    <OtherComponentA />
    <OtherComponentB />
  </>
);
```

_Note that **ProgressBar** is meant to be used as the element that loads at the page's very top._

## Customization:

The following props can be passed:

**`color`** `[string]` _[default: `'red'`]_

Set `background-color` for progress bar. _Any valid **HTML** color will work_. One can validate the passed value with the [**validate-color**](https://github.com/dreamyguy/validate-color) `npm` package.

**`debug`** `[boolean]` _[default: `false`]_

Trigger the **debug** mode by passing `debug` as prop. It will output the scroll position and eventual errors at the `console`.

**`duration`** `[string]` _[default: `'1'`]_

Set duration for transition property. Pass the duration as a string, the unit `s` is appended to it.

**`height`** `[string]` _[default: `'3'`]_

Set `height` for progress bar. Pass the number as a string, the unit `px` is appended to it.

**`zIndex`** `[string]` _[default: `'99'`]_

Set `z-index` for progress bar.

## Fully customized **Progress Bar**:

```jsx
import React from "react";
import ProgressBar from "react-scroll-progress-bar";

export const App = () => (
  <>
    <ProgressBar height="6" color="#bada55" duration="0.2" zIndex="10" debug />
    <OtherComponentA />
    <OtherComponentB />
  </>
);
```

---

> Brought to you by:

- [Aditya Rao](https://www.adityarao.dev/) 🇮🇳 _author_
- [Wallace Sidhrée](https://sidhree.com) 🇳🇴 _contributor_
