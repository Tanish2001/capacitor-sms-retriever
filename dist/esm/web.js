import { WebPlugin } from '@capacitor/core';
export class SmsRetrieverWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map