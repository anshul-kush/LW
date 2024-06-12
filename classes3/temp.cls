trigger CaseDescriptionTrigger on Case (after update) {
    // List to store log records
    List<Case_Description_Log__c> descriptionLogs = new List<Case_Description_Log__c>();

    // Iterate through trigger.new to check for changes in the Description field
    for (Case newCase : Trigger.new) {
        
        // Check if the Description field has been changed
        if (newCase.Description__c !=  Trigger.oldMap.get(newCase.Id).Description__c) {
            // Create a new log record
            Case_Description_Log__c log = new Case_Description_Log__c();
            log.Case__c = newCase.Id;
            log.Old_Description__c = oldCase.Description__c;
            log.New_Description__c = newCase.Description__c;
            descriptionLogs.add(log);
        }
    }

    // Insert the log records
    if (!descriptionLogs.isEmpty()) {
        insert descriptionLogs;
    }
}
