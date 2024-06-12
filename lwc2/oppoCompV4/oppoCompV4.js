import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';

import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
const COLS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Stage', fieldName: 'StageName', type: 'text' },
    { label: 'Close Date', fieldName: 'CloseDate', type: 'date' },
    { label: 'Name', fieldName: 'Amount', type: 'currency' },
];
export default class OppoCompV4 extends LightningElement {
    @wire(getAllOpportunities) oppList; //data, error
    oppColumns = COLS;
    showDelete=false

    handleRowSelection(event) {
        this.showDelete=true
        const rows = event.detail.selectedRows;
        if (rows.length > 0) { //as a best practice
            this.oppId = rows[0].Id;
            console.log('You have selected' + this.oppId);
        }
    }
    handleClick() {
        //call deleteOpportunity imperatively
        //deleteopportunity({ sid: this.oppId})
        deleteRecord(this.oppId)
            .then(() => {
                const eventRef = new ShowToastEvent({
                    title: 'COMPLETED',
                    message: 'Record deleted successfully',
                    variant: 'success'
                })
                this.dispatchEvent(eventRef);
                //get the reference of LDT - good practice
                const ldtRef = this.template.this.template.querySelector('lightning-datatable');
                //assign selectedRows to an empty array
                ldtRef.selectedRows = [];
                refreshApex(this.oppList);
            })
            .catch((issue) => {
                // alert(JSON.stringify(issue.body.message));
                const eventRef = new ShowToastEvent({
                    title: 'INCOMPLETE',
                    message: issue.body.message,
                    variant: 'error'
                })
                this.dispatchEvent(eventRef);
            })
    }

}