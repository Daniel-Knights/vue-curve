import { curve } from './curve';

const VueCurve = {
    install: (app, options) => {
        // Set defaults
        if (!options) options = {};

        app.directive('curve', curve(options));
    },
};

export default VueCurve;

// CDN compatibility
if (window !== undefined && window.Vue) {
    window.VueCurve = VueCurve;
}
