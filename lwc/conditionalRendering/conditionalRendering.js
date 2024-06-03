import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible=false
    name
    handleClick(){
        this.isVisible=true
    }
    changeHandler(event){
        console.log(event.target.value)
        this.name = event.target.value
    }
    get checkCode(){
        return this.name==='hello'
    }
    
}