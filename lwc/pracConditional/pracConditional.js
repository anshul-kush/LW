import { LightningElement } from 'lwc';
export default class PracConditional extends LightningElement {

    isCheck = false;
    clickHandler(event) {
        this.isCheck = true
        this.clearAll()
        console.log('part e')
    }
    clickFHandler(event) {
        this.isCheck = false
        this.clearAll()
                console.log('part f')

    }
    clearAll() {

        setTimeout(() => {
            this.template.querySelector('lightning-input').checked = false;
                    console.log('part yipee')

        }, 3000);
    }
}