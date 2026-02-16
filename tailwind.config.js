/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'kku-gold': '#6A3296',      // สีทอง มข.
                'kku-maroon': '#7B20C0',    // สีแดงเลือดหมู มข.
            },
        },
    },
    plugins: [],
}