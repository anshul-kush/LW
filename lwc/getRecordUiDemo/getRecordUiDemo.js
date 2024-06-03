import { LightningElement, api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi'
export default class GetRecordUiDemo extends LightningElement {
    formFields = [
        { "fieldName": "AccountNumber", "label": "Account Number" },
        { "fieldName": "AnnualRevenue", "label": "Annual Revenue" },
        { "fieldName": "Name", "label": "Name" },
        { "fieldName": "Phone", "label": "Phone" }
    ]
    @api recordId
    @wire(getRecordUi, { recordIds: '$recordId', layout: 'Full', modes: 'Edit' })
    accountRecordHandler(data, error) {
        if (data) {
            console.log(data)
            this.formFields = this.formFields.map(item => {
                return { ...item, value: data.records[this.recordId].fields[item.fieldName].value }
            })
        }
        if(error){
            console.error(error)
        }
    }
}