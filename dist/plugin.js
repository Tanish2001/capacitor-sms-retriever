var capacitorSmsRetriever = (function (exports, core) {
    'use strict';

    const SmsRetriever = core.registerPlugin('SmsRetriever', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SmsRetrieverWeb()),
    });

    class SmsRetrieverWeb extends core.WebPlugin {
        getAppSignature() {
            this.throwUnsupportedError();
        }
        requestPhoneNumber() {
            this.throwUnsupportedError();
        }
        startSmsReceiver() {
            this.throwUnsupportedError();
        }
        removeSmsReceiver() {
            this.throwUnsupportedError();
        }
        throwUnsupportedError() {
            throw this.unavailable('SMS retriever API not available in this browser.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SmsRetrieverWeb: SmsRetrieverWeb
    });

    exports.SmsRetriever = SmsRetriever;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
