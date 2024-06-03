import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}// for storing answers}
    correctAnswer=0// to show number of correct answer
    isSubmitted=false//use to show result
    myQuestions = [
        {
            id: "Question1",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question2",
            question: "Which of the file is invald in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question3",
            question: "WHich one of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        }
    ]
//Change Handler get`s called on every click on the options 
    changeHandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const { name, value } = event.target // Object Destructring
        // const name= event.target.value
        // const value = event.target.value
        this.selected = { ...this.selected, [name]: value } //Spred operator Key value pair 
        // {'Question 1':a}
    }
    //used for diabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    // FOr applying dynamic styling to our result 
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length== this.correctAnswer?
        'slds-text-color_success':'slds-text-color_error'}`
    }
    //form submit handler
    submitHandler() { 
        event.preventDefault()
        event.preventDefault()
        //this.selected ={"Question1":"a", "Question2:"b"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswer = correct.length
        this.isSubmitted=true
    }
//reset form handler 
    resetHandler() {
        this.selected={}
        this.correctAnswer=0
        this.isSubmitted=false
    }


}