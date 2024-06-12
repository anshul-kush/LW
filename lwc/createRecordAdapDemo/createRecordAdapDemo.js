import { LightningElement, wire, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
// import {showtoa}
export default class CreateRecordAdapDemo extends LightningElement {
    formFields={}
    changeHandler(event) {
        const { name, value } = event.target
        this.formFields[name]=value
    }
    createContact(){
        const recordInput={apiName:CONTACT_OBJECT, fields:this.formFields}
        createRecord(recordInput).then(result=>{

        }).catch(error=>{
console.s
        })
    }
}