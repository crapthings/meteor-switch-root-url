### WHY

> when you want to switch between multiple meteor app on cordova and keep last root url while reopen your app, this is the answer



> its okay to redirect to another domain by using window.location.href or replace on desktop browser, but when work with cordova, u should replace all DDP connection and window.location.reload()



### INSTALL

> add package then edit .meteor/packages, move crapthings:switch-root-url to on top of any other packages like below



```bash
meteor add crapthings:switch-root-url
```



```
# Meteor packages used by this project, one per line.
# Check this file (and the other files in this directory) into your repository.
#
# 'meteor add' and 'meteor remove' will edit this file for you,
# but you can also edit it by hand.

crapthings:switch-root-url

meteor-base@1.2.0             # Packages every Meteor app needs to have
mobile-experience@1.0.5       # Packages for a great mobile UX
mongo@1.3.1                   # The database Meteor supports right now
blaze-html-templates@1.0.4 # Compile .html files into Meteor Blaze views
reactive-var@1.0.11            # Reactive variable for tracker
tracker@1.1.3                 # Meteor's client-side reactive programming library

standard-minifier-css@1.3.5   # CSS minifier run for production mode
standard-minifier-js@2.2.0    # JS minifier run for production mode
es5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers
ecmascript@0.9.0              # Enable ECMAScript2015+ syntax in app code
shell-server@0.3.0            # Server-side component of the `meteor shell` command

autopublish@1.0.7             # Publish all data to the clients (for prototyping)
insecure@1.0.7                # Allow all DB writes from clients (for prototyping)
```



### API

> examples



```javascript
Meteor.switchRootUrl('https://another.meteorapp.com')
```

```javascript
Meteor.switchRootUrl('http://localhost:4000')
```



### INSPIRATION

* https://github.com/partus/meteor-server-picker
