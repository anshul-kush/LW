import { LightningElement,api,wire } from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'; //References of fields
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
const FIELDS=[
    'Account.Name',
    'Account.Phone',
]
export default class WireAdapterDemo extends LightningElement {
    @api recordId; //api is used to declare it as public property

    @wire(getRecord,{recordId: '$recordId', fields: [NAME_FIELD,PHONE_FIELD]})
    record; //this will give data and error

    get name(){
        return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : '';
    }
    get phone(){
        return this.record.data ? getFieldValue(this.record.data,PHONE_FIELD):'';
    }

    //Using strings directly instead of referencing
    /*
    @wire(getRecord,{recordId: '$recordId', fields: ['Account.Name','Account.Phone']})
    record; //this will give data and error

    get name(){
        return this.record.data ? getFieldValue(this.record.data,Account.name) : '';
        //return this.record.data.fields.Name.value;
    }
    get phone(){
        return this.record.data ? getFieldValue(this.record.data,Account.phone):'';
    }
    */
}