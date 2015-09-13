// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.globalhack.kourt',
  name: 'kourt',
  description: 'connect with your local courts',
  author: 'Five Guys Code and Fries',
  email: 'andrewfulrich@gmail.com',
  website: 'http://example.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  'android_hdpi': 'gavelhdpi.png'
  //'iphone': 'gavel.png'
//  'iphone_2x': 'icons/icon-60@2x.png',
//  // ... more screen sizes and platforms ...
});

App.launchScreens({
    'android_hdpi_portrait': 'splashhdpi.png'
//  'iphone': 'splash/Default~iphone.png',
//  'iphone_2x': 'splash/Default@2x~iphone.png',
//  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
//App.setPreference('HideKeyboardFormAccessoryBar', true);

// Pass preferences for a particular PhoneGap/Cordova plugin
//App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//  APP_ID: '1234567890',
//  API_KEY: 'supersecretapikey'
//});