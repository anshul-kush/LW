import { LightningElement,wire } from 'lwc';
import { MessageContext } from 'lightning/messageService';

import BILLING_CITY from '@salesforce/schema/Account.BillingCity'
import BILLING_COUNTRY from '@salesforce/schema/Account.BillingCountry'
export default class AccountDetail extends LightningElement {
    selectedAccountId;
    city=BILLING_CITY
    country=BILLING_COUNTRY
    //LMS 3
    @wire(MessageContext) msgCtx;
    connectedCallback(){
    subscribe(this.msgCTX, ASC, (message) => {
        this.selectedAccountId = message.accId
    });
    }   
}