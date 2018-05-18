const cli = require('command-line-arg');
const capabilities = require('../../capabilities');

const getCliParallel = () => {
    let parallel = cli.get('parallel');

    if (parallel) {
        return {'shardTestFiles': true, 'instances': parallel[0]};
    }

    return {'shardTestFiles': false, 'instances': 1};
};

const getCapabilityName = (capabilities) => {
    let name = '';

    Object.entries(capabilities).forEach(([key, val]) => {
        name += val + ' ';
    });

    return name += require('os').userInfo().username;
};

const CapabilityBuilder = (commonCapabilities = defaultCommonCapabilities) => {

    if (!commonCapabilities['browserstack.user'] ||
        !commonCapabilities['browserstack.key'] ||
        !commonCapabilities['project']) {
        throw new Error('BROWSERSTACK_USER or BROWSERSTACK_KEY or PROJECT_NAME missing');
    }

    capabilities.forEach(function(capabilities) {
        capabilities['name'] = getCapabilityName(capabilities);
        console.log(capabilities['name']);
        for (let i in commonCapabilities) {
            capabilities[i] = capabilities[i] || commonCapabilities[i];
        }
    });

    return capabilities;
};

const defaultCommonCapabilities = {
    'browserstack.user': process.env.BROWSERSTACK_USER,
    'browserstack.key': process.env.BROWSERSTACK_KEY,
    'browserstack.local': true,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    'project': process.env.PROJECT_NAME,
    'build': process.env.PROJECT_NAME,
    'shardTestFiles': getCliParallel().shardTestFiles,
    'maxInstances': getCliParallel().instances,
};

module.exports = CapabilityBuilder;
