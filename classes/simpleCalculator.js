import { LightningElement,api } from 'lwc';
export default class SimpleCalculator extends LightningElement {
    //Define properties
    @api firstNumber=20
    @api secondNumber=10
    result
    exists=false

    handleFirstNumber(event) { //DOM modifier
        this.firstNumber=event.target.value
    }

    handleSecondNumber(event) {
        this.secondNumber=event.target.value 
    }

    add() {
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber)
    }
    sub() {
        this.result = this.firstNumber - this.secondNumber
    }
    mult() {
        this.result = this.firstNumber * this.secondNumber
    }
    div() {
        this.result = this.firstNumber / this.secondNumber
    }

    get checkResult(){
        return this.result === undefined || this.result === null;
    }

}