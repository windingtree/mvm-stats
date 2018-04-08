module.exports = ({
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      warnForDuplicates: false
    },
    mdcss: {
      // References
      // https://github.com/jonathantneal/mdcss
      // http://jonathantneal.github.io/mdcss-theme-github/demo/
      theme: require('mdcss-theme-github')({
        title: 'WindingTree Styleguide',
        logo: '',
        base: 'public/styleguide',
        examples: {
          css: ['../app.css','font/wt-icons.css'],
        }
      }),
      destination: 'public/styleguide/',
      index: 'index.html',
      // files that will be copied to styleguide folder
      assets: ['src/css/styleguide/style.css','src/font/'],
    },
    'cssnano': {}
  },
});
