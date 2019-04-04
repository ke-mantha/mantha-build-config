const defaultOptions = {
    title: 'Mantha project',
    appMountId: 'app',
    lang: 'en',
    favicon: 'assets/favicon.ico',
    meta: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }
    ],
    mobile: true
};
export const HTMLFactory = (mode, options = {
    common: defaultOptions
}) => {
    const other = options[mode] || {};
    const mergedMeta = [...(options.common || defaultOptions).meta, ...other.meta];
    const mergedOptions = Object.assign({}, (options.common || defaultOptions), other);
    mergedOptions.meta = mergedMeta;
    return mergedOptions;
};
