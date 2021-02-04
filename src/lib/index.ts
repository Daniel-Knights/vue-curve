import { curve } from './curve'
import type { App } from 'vue'

export interface Options {
    color?: string
    intensity?: string
}

const VueCurve = {
    install: (app: App, options: Options): void => {
        // Set defaults
        if (!options) options = {}

        app.directive('curve', curve(options))
    }
}

export default VueCurve

// CDN compatibility
// @ts-ignore
if (window !== undefined && window.Vue) {
    // @ts-ignore
    window.VueCurve = VueCurve
}
