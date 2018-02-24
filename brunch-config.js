// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: { joinTo: 'app.css' }
};

exports.plugins = {
  babel: {
    plugins: ['styled-components'],
    presets: ['latest', 'react'],
    ignore: [
      /^node_modules/,
      'app/legacyES5Code/**/*'
    ]
  },
  imagemin: {
    plugins: {
      'imagemin-gifsicle': true,
      'imagemin-jpegtran': true,
      'imagemin-optipng': true,
      'imagemin-svgo': true
    },
    pattern: /\.(gif|jpg|jpeg|jpe|jif|jfif|jfi|png|svg|svgz)$/
  }
};
