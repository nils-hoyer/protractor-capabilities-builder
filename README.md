# protractor-capabilities-builder
generates multiCapabilities from capabilities and commonCapabilities

# usage
The protractor-capabilities-builder is available via npm:

```npm i protractor-capabilities-builder```

# example
1. require CapabilitiesBuilder in your conf.js
2. call CapabilitiesBuilder()
```
const CapabilitiesBuilder = require('protractor-capabilities-builder');

const capabilities = [
   {
       'os': 'Windows',
       'os_version': '10',
       'browserName': 'chrome',
       'browser_version': '65',
       'resolution': '1440x900',
   },
   {
       'os': 'OS X',
       'os_version': 'Sierra',
       'browserName': 'firefox',
       'browser_version': '59',
       'resolution': '1366x768',
   },
   ...
];

const commonCapabilities = {
    'browserstack.user': xxx,
    'browserstack.key': xxx,
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
};

exports.config = {
    multiCapabilities: CapabilitiesBuilder(capabilities, commonCapabilities),
    // ...
}
```

#output
```
[ { 
    os: 'Windows',
    os_version: '10',
    browserName: 'chrome',
    browser_version: '65',
    resolution: '1440x900',
    'browserstack.user': 'xxx',
    'browserstack.key': 'xxx',
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    name: 'Windows 10 chrome 65 1440x900 max.mustermann' },
  { 
    os: 'OS X',
    os_version: 'Sierra',
    browserName: 'firefox',
    browser_version: '59',
    resolution: '1366x768',
    'browserstack.user': 'xxx',
    'browserstack.key': 'xxx',
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    name: 'OS X Sierra firefox 59 1366x768 max.mustermann' 
} ]
    
```
