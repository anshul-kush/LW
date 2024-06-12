/*trigger createTaskForAccount on Account (after insert) {
   Id temp;
    for(account acc:Trigger.new){
        temp=acc.Id;
    }
    Task newTask = new Task(Subject = 'Created from Apex Trigger',Status ='Not Started',
    Priority='High',WhatId = temp);
    insert newTask;
}*/
trigger createTaskForAccount on Account (after insert) {
    // List to store Task records to be inserted
    List<Task> taskList = new List<Task>();

    for (Account acc : Trigger.new) {
        // Create a Task record for each Account
        taskList.add(new Task(
            Subject = 'Created from Apex Trigger',
            Status = 'Not Started',
            Priority = 'High',
            WhatId = acc.Id
        ));
    }

    // Insert all Task records in a single DML statement
    if (!taskList.isEmpty()) {
        try {
            insert taskList;
            System.debug('Tasks created successfully.');
        } catch (Exception e) {
            System.debug('Error creating tasks: ' + e.getMessage());
        }
    }
}

// When the Account is Created, create a Task Record under that Account and 
// assign the Task to the Account Owner. Use the below information
// Subject – Created from Apex Trigger
// Comments – Created from Apex Trigger
// Status – Not Started
// Priority – High
// Related To (What) – Account Id
// Assigned To (OwnerId) – Account Owner Id