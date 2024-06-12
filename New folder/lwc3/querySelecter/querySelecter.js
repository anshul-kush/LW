import { LightningElement } from 'lwc';

export default class QuerySelecter extends LightningElement {
    greetings='Enter Name ';
    handleClick(event){
        this.greetings=this.template.querySelector("lightning-input").value;
        //Query selector got the value directly from the lightning input
    }
}