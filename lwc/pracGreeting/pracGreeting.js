import { LightningElement } from 'lwc';

export default class PracGreeting extends LightningElement {
    name
    handleInput(event){
        this.name= event.target.value
    }
}