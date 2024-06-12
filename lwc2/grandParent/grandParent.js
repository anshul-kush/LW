import { LightningElement } from 'lwc';
export default class GrandParent extends LightningElement {
    message
    handleGemo(event) {
        this.message = event.detail.msg;
    }
}