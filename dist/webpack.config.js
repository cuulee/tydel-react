module.exports = {
  entry: __dirname + '/../',
  output: {
    path: __dirname,
    filename: 'tydel-react.js',
    libraryTarget: 'this',
    library: 'TydelReact'
  },
  externals: {
    react: 'React'
  }
};
