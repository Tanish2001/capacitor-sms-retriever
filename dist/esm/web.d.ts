import { WebPlugin } from '@capacitor/core';
import { AppSignature, HintPhoneNumber, RegisterReceiver, SmsRetrieverPlugin } from './definitions';
export declare class SmsRetrieverWeb extends WebPlugin implements SmsRetrieverPlugin {
    getAppSignature(): Promise<AppSignature>;
    requestPhoneNumber(): Promise<HintPhoneNumber>;
    startSmsReceiver(): Promise<RegisterReceiver>;
    removeSmsReceiver(): Promise<void>;
    private throwUnsupportedError;
}
