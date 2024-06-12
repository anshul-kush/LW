import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';
export default class ArrayToList extends LightningElement {
    oppList=[]

    @wire(getAllOpportunities)
    wiredOppo({ data, error }) {
        if (data) {
            this.oppList = data;
            console.log(data)
        }
        if (error) {
            console.log(error)
        }
    }
}