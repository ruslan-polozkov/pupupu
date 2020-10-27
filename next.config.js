const path = require('path')
const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
module.exports = withSass(withFonts({
    webpack(config, options) {
        return config;
    },
}));

module.exports = withSass(withFonts({
    target: 'serverless',
    experimental: { scss: true },
    trailingSlash: true,
    async rewrites() {
        return [
            // Optional Language
            // Query object shape: { lang?: string }
            { source: "/:lang(en)?/domino", destination: "/en/dominoes" },
        ];
    }
}));