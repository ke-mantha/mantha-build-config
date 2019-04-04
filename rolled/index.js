(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.ManthaBuildConfig = {}));
}(this, function (exports) { 'use strict';

    // Specify regexes to determine which chunks to ignore from split:
    const chunkSplitRules = [
        /mantha-.*/i,
        /main/
    ];

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
    const HTMLFactory = (mode, options = {
        common: defaultOptions
    }) => {
        const other = options[mode] || {};
        const mergedMeta = [...(options.common || defaultOptions).meta, ...other.meta];
        const mergedOptions = Object.assign({}, (options.common || defaultOptions), other);
        mergedOptions.meta = mergedMeta;
        return mergedOptions;
    };

    exports.HTMLFactory = HTMLFactory;
    exports.chunkSplitRules = chunkSplitRules;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
