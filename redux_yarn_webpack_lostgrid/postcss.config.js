module.exports = {
  plugins: [
      require('postcss-import')(),
      require('postcss-nested')(),

      require('postcss-simple-vars'),
      require('postcss-cssnext')({
          warnForDuplicates: false
      }),
      require('postcss-calc'),
      require('postcss-functions')({
          functions: {
              darken: function (value, frac) {
                var hsla = color(value).toHslaArray();
                hsla[2] = Math.round(Math.max(Math.min(100, hsla[2] - hsla[2] * frac), 0));
                return color().fromHsla(hsla).toHexString();
              }
          }
      }),
      require('lost')
  ]
}

//https://gist.github.com/lavezzi1/f706711ad47813b5bff2ab6365b6c0aa