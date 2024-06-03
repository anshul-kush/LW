import { LightningElement } from 'lwc';

export default class C2pParentComp extends LightningElement {
    showModal = false
    msg
    clickHandler() {
        this.showModal = true
    }
    // 4. 
    closeParentHandler(event) {
        this.msg = event.detail
        this.showModal = false
    }
}