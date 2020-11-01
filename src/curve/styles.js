// Minify CSS
export const minify = styles => {
    let selector = false;
    let value = false;

    const minified = styles
        .split('')
        .map(char => {
            // Retain spaces between selectors
            // Determine start of selector
            if ((char === '.' || char === '@' || char === '#') && !value) selector = true;
            // Determine end of selector
            if (selector && (char === ',' || char === '{')) selector = false;

            // Retain spaces between rules with multiple values
            if (char === ':' && !selector) value = true;
            if (char === ';' && !selector) value = false;

            // Replace spaces and line-breaks
            if ((char === ' ' || char === '\n' || char === '\r') && !selector && !value) return '';

            return char;
        })
        .join('')
        .split(' {')
        .join('{')
        .split(': ')
        .join(':');

    return minified;
};

export const dynamicStyles = (color, intensity, selector) => `
    .v__curve-${selector} {
        box-shadow: 0 0 10px -5px ${color};
    }
    .v__curve-${selector}::before,
    .v__curve-${selector}::after {
        bottom: ${intensity}px;
        box-shadow: 0 0 6px 8px ${color};
    }
`;

export const defaultStyles = `
    .v__curve {
        position: relative;
        min-height: 40px;
        box-shadow: 0 0 10px -5px #000;
        background: #fff;
    }
    .v__curve::before,
    .v__curve::after {
        content: "";
        position: absolute;
        bottom: 10px;
        width: 50%;
        max-width: 200px;
        box-shadow: 0 0 6px 8px #000;
        z-index: -1;
    }
    .v__curve::before {
        left: 12px;
        transform: skew(-10deg, -6deg);
    }
    .v__curve::after {
        right: 12px;
        transform: skew(10deg, 6deg);
    }
`;
