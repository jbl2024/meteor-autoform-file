Package.describe({
  name: "jbl2024:autoform-file",
  summary: "File upload for AutoForm (AbDJ) for Autoform 5.0.2",
  description: "File upload for AutoForm (AbDJ) for Autoform 5.0.2",
  version: "0.2.0",
  git: "http://github.com/jbl2024/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use(
    [
    'coffeescript',
    'underscore',
    'templating',
    'less',
    'aldeed:autoform@5.0.2'
    ],
    'client');

  api.add_files('lib/client/helpers.js', 'client');
  api.add_files('lib/client/autoform-file.html', 'client');
  api.add_files('lib/client/autoform-file.less', 'client');
  api.add_files('lib/client/autoform-file.coffee', 'client');
});
