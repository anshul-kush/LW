import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService'

export default class LmsComponentX extends LightningElement {
    receivedMessage
    subscription

    @wire(MessageContext)
    context

    connectedCallback(){ //to call this method on page load
        this.subscribeMessage()
    }
    subscribeMessage() {
        // subscribe(messageContext,messageChannel,listener,subscriberOptions)
        this.subscription=subscribe(this.context, SAMPLEMC, (message) => { this.handleMessage(message) }, { scope: APPLICATION_SCOPE })
    }

    handleMessage(message){
        this.receivedMessage=message.lmsData.value? message.lmsData.value:'No Message published'
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)

    }
}