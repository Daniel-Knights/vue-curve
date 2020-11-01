import { minify, dynamicStyles, defaultStyles } from './styles';

let color, intensity, formattedIntensity;

const formatIntensity = () => {
    // Format into px value for CSS 'bottom' property
    switch (intensity) {
        case 'low':
            formattedIntensity = 10;
            break;
        case 'medium':
            formattedIntensity = 8;
            break;
        case 'high':
            formattedIntensity = 5;
            break;
        default:
            console.error(
                'VueCurve [error]: Invalid value passed to "intensity".' +
                    '\n    Valid values: "low", "medium", "high".' +
                    '\n    Received:' +
                    `\n        Type: ${typeof intensity}.` +
                    `\n        Value: ${intensity}.`
            );
            break;
    }
};

export const curve = options => {
    return {
        mounted(el, binding) {
            const id = parseInt(Date.now()) * Math.floor(Math.random() * 100);
            const stylesheet = document.createElement('style');

            // Determine between global options and local options
            color = binding.arg || options.color;
            intensity = binding.value || options.intensity;

            if (intensity) formatIntensity();

            // Populate stylesheet
            stylesheet.type = 'text/css';
            stylesheet.id = `v__curve-stylesheet`;
            stylesheet.innerHTML = minify(defaultStyles);

            // Ensure no duplicate stylesheets before appending
            if (!document.getElementById('v__curve-stylesheet')) {
                document.head.appendChild(stylesheet);
            }

            // Add dynamic 'box-shadow' and 'bottom' values to stylesheet
            if (color || intensity) {
                document.getElementById('v__curve-stylesheet').innerHTML += minify(
                    dynamicStyles(color, formattedIntensity, id)
                );
                el.classList.add(`v__curve-${id}`);
            }

            el.classList.add(`v__curve`);
        },
    };
};
