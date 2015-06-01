Template.registerHelper('autoform_absoluteUrl', function(url) {
  if (!url) return;
  if (url[0] === '/') {
    url = url.substring(1);
  }
  
  return Meteor.absoluteUrl(url);
});
