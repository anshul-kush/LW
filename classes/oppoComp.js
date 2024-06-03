import { LightningElement,wire } from 'lwc';

import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'
export default class OppoComp extends LightningElement {
@wire(getAllOpportunities) oppList;
}