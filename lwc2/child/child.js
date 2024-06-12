import { LightningElement } from 'lwc';
export default class Child extends LightningElement {

    sendMessage() {
        const eventRef = new CustomEvent('demo', { bubbles: true, composed: true, detail: { msg: 'Hello' } });
        this.dispatchEvent(eventRef);
    }
}