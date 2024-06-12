import { LightningElement, wire } from 'lwc';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'
export default class OppoCompV2 extends LightningElement {
    @wire(getWonOpportunities)
    wiredGetWonOpportunities({ data, error }) {

        if (data) {
            this.oppList = []; //as a best practice
            data.forEach(() => {
                const obj = {
                    Name: opp.Name,
                    StageName: opp.StageName,
                    CloseDate: opp.CloseDate,
                    Amount: opp.Amount,
                    Id: opp.Id,
                    Commission: opp.Amount * .020
                }
                this.oppList.push(obj);
            })
        }
    }
}