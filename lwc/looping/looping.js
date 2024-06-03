import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList=["Ford","Audi","Maruti","Hyundai","Mercedes"]
    ceoList=[
        {
            id:1,
            company:"Goodgle",
            name:"SUndar Pichai"
        },
        {
            id:2,
            company:"Apple Inc.",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Adobe",
            name:"Anvik Jain"
        },
        {
            id:4,
            company:"Alphabet",
            name:"Snai"
        }
    ]
}