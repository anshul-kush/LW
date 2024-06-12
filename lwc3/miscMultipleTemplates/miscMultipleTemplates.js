import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';
export default class MiscMultipleTemplates extends LightningElement {

    templateOne=true;
    render(){
        return this.templateOne ? templateOne : templateTwo
    }
    switchTemplates(){
        this.templateOne = this.templateOne === true ? false : true;
    }
}