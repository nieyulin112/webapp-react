var config = {
  entry: './main.js',
  output:{
    path:'./',
    filename: 'index.js',
  },
  devServe:{
    inline:true,
    port:7001
  },
  module:{
    loaders:[{
      test:/.jsx?$/,
      exclude:/node_modules/,
      loader:babel,
      query:{
        presets:['es2015','react']
      }
    }]
  }
};
module.export = config;
