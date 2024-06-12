//Create a trigger that updates the "Last Contacted Date" field on a Contact whenever a 
	//related Opportunity is updated. 
	//Use an after update trigger on the Opportunity object.

	trigger lastContactedTrigger on Opportunity (after update) {
		Map<Id,Datetime> contactsLastActMAP = new Map<Id,Datetime>();
		for(Opportunity opp: trigger.New){
			contactsLastActMAP.put(opp.contactId,opp.LastModifiedDate);
		}
        if(!contactsLastActMAP.isEmpty()){
            List<Contact> contListToUpdate = new List<Contact>();
            for(Id contId : contactsLastActMAP.keySet()){
                contListToUpdate.add(new Contact
                (Id=contId,
                Last_Contacted_Date__c=contactsLastActMAP.get(contId)));
            }
         update contListToUpdate;   
        }
	}