import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';

//Define a function
const _showToast= function(thisArg,title,message,variant){
    const eventRef=new showToastEvent({title,message,variant})
    thisArg.dispatchEvent(eventRef);
}

const _getValue= function (data,field){
    return getFieldDisplayValue(data,field)? getFieldDisplayValue(data,field): getFieldValue(data,field)
}

export{
    _showToast,_getValue
}