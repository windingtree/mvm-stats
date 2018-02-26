module.exports = ({
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      warnForDuplicates: false
    },
    'postcss-style-guide': {
      project: 'Style Guide',
      dest: 'public/styleguide/index.html',
      showCode: true,
      // themePath: '../'
    },
    'cssnano': {}
  },
});
