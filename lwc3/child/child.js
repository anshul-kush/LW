import {api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    uppercaseItemName = 'default value';
    
    @api
    statement='I am child component'; //private property

    @api //Converts property in public
    get itemName(){
        return this.uppercaseItemName;
    }
    set itemName(value){
        this.uppercaseItemName=value.toUpperCase();
    }
}