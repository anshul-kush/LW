import { LightningElement, wire } from 'lwc';
import filterAccountTypeType from '@salesforce/apex/AccountController.getAccountList';

export default class WireApexWithParam extends LightningElement {
    selectedType=''
    @wire(filterAccountTypeType, {type:'$selectedType'})
    filteredAccounts

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }
    typeHandler(event){
        this.selectedType = event.target.value
    }
}