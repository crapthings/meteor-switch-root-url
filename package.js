Package.describe({
  name: 'crapthings:switch-root-url',
  summary: 'switch root url',
  version: '0.0.1',
  git: 'https://github.com/crapthings/meteor-switch-root-url'
})

Package.on_use(function (api) {
  api.add_files('index.js', 'client')
})
