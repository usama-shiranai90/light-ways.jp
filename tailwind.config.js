module.exports = {

    content: [
        './storage/framework/views/*.php', //  tailwind needs to watch the following php list.
        './resources/**/*.blade.php', //  tailwind needs to watch the following php list.
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                sm: '640px', // tablet
                md: '768px',
                lg: '1024px', // laptop
                xl: '1280px',// desktop
                ul: '1536px',
            }
        },

    },
    variants: {
        extend: {},
    },
    plugins: [require('./plugin')],
}
