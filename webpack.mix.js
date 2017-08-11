let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/')
  .extract(['axios']);

mix.js('src/shared.worker.js', 'dist/');
