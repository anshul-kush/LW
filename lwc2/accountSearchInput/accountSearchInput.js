import { LightningElement } from 'lwc';
export default class AccountSearchInput extends LightningElement {
    searchText

    handleChange(event) {
        const searchText = event.target.value
        this.notifyParent(searchText)
    }

    notifyParent(searchText){
        const eventRef=new CustomEvent('search',{detail:{searchText}});
        this.dispatchEvent(eventRef);
    }


}