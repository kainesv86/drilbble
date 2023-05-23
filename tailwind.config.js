module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#22B75A',
                    50: '#A3EEBF',
                    100: '#92EBB3',
                    200: '#6FE49B',
                    300: '#4DDE83',
                    400: '#2AD76B',
                    500: '#22B75A',
                    600: '#198843',
                    700: '#10582B',
                    800: '#082914',
                    900: '#000000',
                },
                tango: {
                    DEFAULT: '#F37124',
                    50: '#FFFEFE',
                    100: '#FEEEE5',
                    200: '#FBCFB5',
                    300: '#F8B085',
                    400: '#F69054',
                    500: '#F37124',
                    600: '#D8580C',
                    700: '#A84409',
                    800: '#773107',
                    900: '#471D04',
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
