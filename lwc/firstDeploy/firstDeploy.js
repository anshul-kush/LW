import Country from '@salesforce/schema/Asset.Country';
import { LightningElement,track } from 'lwc';

export default class FirstDeploy extends LightningElement {
    fullName="Salesforce"
    title="Aura"

    changeHandler(event){
        this.title=event.target.value
    }

    @track address={
        city:'Melbourne',
        postcode:3008,
        Country:"Australia"
    }
    trackHandler(event){
        // this.address = {...this.address, "city":event.target.value} SPREAD Operator Use
        this.address.city=event.target.value;
    }
    /*Getters*/
    users=["John","Smith","Nik"]
    num1 = 10
    num2=20

    get firstUser(){
        return this.users[0];
    }
    get multiply(){
        return this.num1*this.num2
    }
}