# vue-curve

[![npm](https://img.shields.io/npm/v/vue-curve.svg)](https://www.npmjs.com/package/vue-curve)
[![vue](https://img.shields.io/badge/vue-3.x-brightgreen)](https://v3.vuejs.org/)

## Description

Vue-Curve is a Vue 3 plugin which allows for a custom directive, `v-curve`, which applies a curved 'box-shadow' to any box-shaped element.

[Demo](https://codepen.io/daniel-knights/pen/OJXZvMv)

## Installation

### CLI

```bash
npm i vue-curve
```

### CDN

```html
<script src="https://unpkg.com/vue-curve"></script>
```

## Setup

### CLI

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueCurve from 'vue-curve'

const app = createApp(App)

app.use(VueCurve)
app.mount('#app')
```

### CDN

```js
const app = Vue.createApp({})

app.use(VueCurve)
app.mount('#app')
```

#### With options

```js
// Intensity values: 'high', 'medium', 'low'
app.use(VueCurve, { color: '#000', intensity: 'medium' })
```

## Usage

```html
<div v-curve>VueCurve</div>
```

#### With local options

```html
<div v-curve:[color]="intensity">VueCurve</div>
```
