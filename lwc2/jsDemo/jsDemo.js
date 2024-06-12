import { LightningElement } from 'lwc';
export default class JsDemo extends LightningElement {

    todaysDateTime = new Date();
    
    updateTimeCallback(){
        //callback or nested function will not have access to "this" context
        setInterval(function (){
            this.todaysDateTime=new Date();
            console.log('updateTimeCallback'+this.todaysDateTime)
        },1000);
    }

    updateTimeUsingLocalVariable(){
        let localThis=this;
        //callback or nested function will not have access to "this" context so providing via local variable
        setInterval(function (){
            localThis.todaysDateTime=new Date();
            console.log('updateTimeUsingLocalVariable'+this.todaysDateTime)
        },1000);
    }

     updateTimeUsingBind(){
        //callback or nested function will not have access to "this" context
        setInterval(function (){
            localThis.todaysDateTime=new Date();
            console.log('updateTimeUsingBind'+this.todaysDateTime)
        }.bind(this),1000);
    }

      updateTimeUsingArrow(){
        //Arrow function will have access to "this" context
        setInterval( ()=>{
            localThis.todaysDateTime=new Date();
            console.log('updateTimeUsingArrow'+this.todaysDateTime)
        },1000);
    }
}