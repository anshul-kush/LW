import { LightningElement, wire } from 'lwc';
import accountSearch from '@salesforce/apex/AccountSearch.accountSearch'
import {publish,MessageContext} from 'lightning/messageService'
import ASC from '@salesforce/messageChannel/AccountSearchChannel__c'
export default class AccountSearchResult extends LightningElement {

    searchResult;
    userSearchInput
    @wire(MessageContext) msgCtx;

    @wire(accountSearch, { searchText: '$userSearchInput' })
    showSearchResult({ data }) {
        if (data) {
            this.searchResult = data;
        }
    }

    handleSearch(event) {
        // const searchText = event.detail.searchText;
        this.userSearchInput = event.detail.searchText;
        // alert(this.userSearchInput)
        // publish(this.msgCtx,ASC,{})
    }

    handleClick(event){
        //Use event.currentTarget to get reference of tr
        const trRef = event.current.target
        const accId = trRef.getAttribute('data-sid');
        alert('You have selected'+accId);
        publish(this.msgCtx,ASC,{accId})
    }
}