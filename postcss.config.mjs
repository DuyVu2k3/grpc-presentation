/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- Sửa dòng này (Thêm @ và /postcss)
    autoprefixer: {},
  },
};

export default config;