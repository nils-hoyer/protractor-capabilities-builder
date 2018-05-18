# protractor-capabilities-builder
generates capabilities from commonCapabilities and capabilities for config.multiCapabilities

# usage
The protractor-capabilities-builder is available via npm:

```npm install protractor-capabilities-builder --save```

# example
1. create capabilities.js in the project root
2. add capabilities
```
module.exports = [
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

```

3. require CapabilitiesBuilder in your conf.js
4. call CapabilitiesBuilder
```
const CapabilitiesBuilder = require('protractor-capabilities-builder');

exports.config = {
    multiCapabilities: CapabilitiesBuilder(),
    // ...
}
```

```
[ { os: 'Windows',
    os_version: '10',
    browserName: 'chrome',
    browser_version: '65',
    resolution: '1440x900',
    'browserstack.user': 'xxx',
    'browserstack.key': 'xxx',
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    project: 'xxx',
    build: 'xxx',
    shardTestFiles: false,
    maxInstances: 1,
    name: 'Windows 10 chrome 65 1440x900 user.name' },
  { os: 'OS X',
    os_version: 'Sierra',
    browserName: 'firefox',
    browser_version: '59',
    resolution: '1366x768',
    'browserstack.user': 'xxx',
    'browserstack.key': 'xxx',
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    project: 'xxx',
    build: 'xxx',
    shardTestFiles: false,
    maxInstances: 1,
    name: 'OS X Sierra Chrome 60.0 1600x1200 user.name' } ]
}
```

#customization
add --parallel=2 to set shardTestFiles to true for the execution
```
npm run test --parallel=2
```
parse custom commonCapabilities
```
exports.config = {
    multiCapabilities: CapabilitiesBuilder(myCommonCapabilities),
    // ...
}
```


