# Prerequisites

## Node and dependencies
-  **[Nodejs & npm](https://nodejs.org/)** - install via their website, **[yarn](https://yarnpkg.com/)** is also a viable option
- **[Yo](http://yeoman.io/)**, **[Gulp](http://gulpjs.com/)** and **[Bower](http://bower.io/)** - install via npm

```sh
# npm
npm install --global yo
npm install --global gulp
npm install --global bower
```
## Global config fot git (prevent timeout)
```sh
git config --global url."https://".insteadOf git://
```
 ## Installation
run 
```sh
npm install && bower install && gulp --cordova "prepare"
```

run live
```sh
gulp watch --env=dev
```

## Generate APK
```sh
gulp --cordova "build android --release"
```
