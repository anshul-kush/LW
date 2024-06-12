//Develop a trigger that prevents users from updating the Stage Name on an Opportunity to "Closed Lost" 
// unless a specific picklist field on the Opportunity is populated with a reason for 
// losing the deal. Use a before update trigger.
trigger restrictOppoUpdate on Opportunity (before update) {
        // List to hold Opportunities that are being updated to Closed Lost without a reason
        // List<Opportunity> opportunitiesToUpdate = new List<Opportunity>();
    
        // // Iterate through the opportunities being updated
        // for (Opportunity opp : Trigger.new) {
        //     // Check if the Stage Name is being updated to Closed Lost
        //     if (opp.StageName != 'Closed Lost' && opp.StageName != trigger.oldMap.get(opp.Id).StageName) {
        //         // Check if the reason for losing the deal is empty
        //         if (!String.isBlank(opp.Reason_for_Losing_Deal__c)) {
        //             // Add the Opportunity to the list of Opportunities to update
        //             opportunitiesToUpdate.add(opp); 
        //         }
        //     }
        // }
        // // If there are Opportunities to update, add an error to prevent the update
        // if (!opportunitiesToUpdate.isEmpty()) {
        //     for (Opportunity opp : opportunitiesToUpdate) {
        //         opp.StageName.addError('You cannot update the Stage Name to "Closed Lost" without providing a reason for losing the deal.');
        //     }
        // }
        for (Opportunity opp : Trigger.new) {
    
            // Check if stage is changing to "Closed Lost"
            if (opp.StageName != 'Closed Lost' && opp.StageName != trigger.oldMap.get(opp.Id).StageName) {
              continue; // Ignore other stage changes
            }
            
            // Validate if LossReason__c is populated
            if (String.isBlank(opp.Reason_for_Losing_Deal__c)) {
              opp.addError('To close an opportunity as "Closed Lost", you must select a reason for losing the deal from the "Loss Reason" picklist.');
            }
          }
    }