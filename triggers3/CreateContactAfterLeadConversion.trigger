trigger CreateContactAfterLeadConversion on Lead (after update) {
    // Check if the Lead was converted
    List<Lead> convertedLeads = new List<Lead>();
    for (Lead lead : Trigger.new) {
        if (lead.IsConverted && Trigger.oldMap.get(lead.Id).IsConverted == false) {
            convertedLeads.add(lead);
        }
    }
    
    if (!convertedLeads.isEmpty()) {
        List<Contact> newContacts = new List<Contact>();
        
        for (Lead convertedLead : convertedLeads) {
            // Define your criteria for creating a new Contact based on Lead
            if (convertedLead.Status == 'Converted') {
                Contact newContact = new Contact(
                    FirstName = convertedLead.FirstName,
                    LastName = convertedLead.LastName,
                    Email = convertedLead.Email,
                    Phone = convertedLead.Phone,
                    AccountId = convertedLead.ConvertedAccountId // Associate with the converted Account
                    // You can map other fields as needed
                );
                newContacts.add(newContact);
            }
        }
        
        if (!newContacts.isEmpty()) {
            try {
                insert newContacts;
            } catch (Exception e) {
                System.debug('Error creating new Contacts: ' + e.getMessage());
            }
        }
    }
}