//You are tasked with creating a trigger on the Contact object in Salesforce. The requirement is to track changes to the Email field on Contacts and create a custom object record (EmailChange__c) whenever the email address is updated. The custom object should store the old and new email addresses along with the associated Contact.
// Write an Apex trigger that accomplishes this requirement using the oldMap and newMap in the trigger context.
trigger trackEmailChange on Contact (before update) {
    // for(Account acc: trigger.new){}

}