import {LightningElement,api,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import {getRecord} from 'lightning/uiRecordApi'; 
// getRecord is adapterID and uiRecordApi is adpter module

export default class WireApexDemo extends LightningElement {
    @api recordId; //property will be able to acess value from outside
    contacts;
    error;
    //receving id from record page automatically

    @wire(getRecord,{recordId:'$recordId', fields: 'Account.Name'})
    record;

    @wire(getContacts,{accId:'$recordId'})
    contacts;  //data and error

    @wire(getContacts,{accId: '$recordId'})
    wiredContact({error,data}){
        if(data){
            this.contact=data;
            this.error=undefined;
        }
        else if(error){
            this.error=error;
            this.contacts=undefined;
        }
    }


    get name() {
    // Check if 'record' is defined and has the expected structure
        if (this.record && this.record.data && this.record.data.fields) {
            return this.record.data.fields.Name.value;
        }
    return undefined; // or handle the case when the data is not available
    }
}