import { LightningElement } from 'lwc';

export default class RenderingListIterator extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Anshul',
            Title: 'Senior Software Analyst'
        },
        {
            Id: 2,
            Name: 'Sanjay',
            Title: 'Software Analyst'
        },
        {
            Id: 3,
            Name: 'Arya',
            Title: 'Team Lead'
        }
    ];
}