import { LightningElement } from 'lwc';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'
import getLostOpportunities from '@salesforce/apex/OpportunityController.getLostOpportunities'
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'

export default class OppoCompV3 extends LightningElement {
//Define a property to store list of oppo
    oppList

    connectedCallback() {
        this.loadAllOpportunities();
    }
    loadWonDeals() {
        //Call the apex
        getWonOpportunities()
            .then((result) => {
                this.oppList = result;
            })
            .catch((issue) => {
                console.log(JSON.stringify(issue.body.message))
            })
    }
    loadLostDeals() {
        getLostOpportunities()
            .then((result) => {
                this.oppList = result;
            })
            .catch((issue) => {
                console.log(JSON.stringify(issue.body.message))
            })
    }
}