// Write an Apex trigger that monitors changes to a Long Text Area field named "Email" on the Case object. 
// Whenever the Description field is updated, the trigger should log the old and new values of the field in "Log_of_Case__c".
trigger logOfCase on Contact (after update) {

    Map<Id,String> contMap = new Map<Id,String>();
    for(Contact cont : trigger.new){
        if(cont.Email!= null && cont.Email!= trigger.OldMap.get(cont.Id).Email){
            contMap.put(cont.Id, cont.Email);
        }
    }
    List<Contact> contListToUpdate = new List<Contact>();
    for(Id contId : contMap.keySet()){
        contListToUpdate.add(new Contact(Id=contId,Email=contMap.get(contId)));
    }
    update contListToUpdate;   
}