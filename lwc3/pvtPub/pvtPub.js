import { LightningElement, api } from 'lwc';

export default class PvtPub extends LightningElement {
        message = 'Public Property';
        @api recordId;
        recordId;
}