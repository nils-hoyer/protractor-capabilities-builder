const getCapabilityName = (capabilities) => {
    let name = '';

    Object.entries(capabilities).forEach(([key, val]) => {
        name += val.toLowerCase() + ' ';
    });

    return name += require('os').userInfo().username.toLowerCase();
};

const CapabilitiesBuilder = (capabilities, commonCapabilities) => {
    capabilities.forEach(function(capabilities) {
        capabilities['name'] = getCapabilityName(capabilities);

        for (let i in commonCapabilities) {
            capabilities[i] = capabilities[i] || commonCapabilities[i];
        }
    });

    return capabilities;
};

module.exports = CapabilitiesBuilder;