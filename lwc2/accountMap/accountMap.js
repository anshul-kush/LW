import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import BILLING_CITY from '@salesforce/schema/Account.BillingCity'
import BILLING_COUNTRY from '@salesforce/schema/Account.BillingCountry'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'

import { _getValue } from 'c/utility'

export default class AccountMap extends LightningElement {
    accountMapMarkers
    @api salesforceId
    @wire(getRecord, { recordId: '$salesforceId', fields: [BILLING_CITY, BILLING_COUNTRY] })

    loadRecord({ data, error }) {
        if (data) {
            const City = _getValue(data, BILLING_CITY)
            const Country = _getValue(data, BILLING_COUNTRY)
            const AccName = _getValue(data, ACCOUNT_NAME)

            this.accountMapMarkers = [
                {
                    title: `You are viewing ${AccName} Address`,
                    location: { City, Country },
                    description: `${City} in ${Country}`
                }
            ];
            alert(JSON.stringify(data))
            // this.accountMapMarkers = [
            //     {
            //         title: 'Accenture',
            //         location: {
            //             // City: 'Bangalore',
            //             City: _getValue(data, BILLING_CITY),
            //             // Country: 'India'
            //             Country: _getValue(data, BILLING_COUNTRY)
            //         },
            //         description: 'Accenture Bangalore Address'
            //     }
            // ];
        }
    }
}