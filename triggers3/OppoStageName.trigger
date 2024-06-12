trigger OppoStageName on Opportunity (before update) {
    for(Opportunity opp: trigger.new){
        Opportunity oldOpp = Trigger.oldMap.get(opp.id);
        if (opp.StageName == 'Closed Won' && (opp.Amount != oldOpp.Amount || opp.AccountId != oldOpp.AccountId)) {
            opp.addError('Oppo cant be modified');
        }
    }
}

// Develop a Solution on Opportunity so that if the StageName of the Opportunity is already set to “Closed Won” 
// and now if any user is trying to Change the Amount or Account of the Opportunity the user should get the Error.

    // for (Opportunity opp : Trigger.new) {
    //     Opportunity oldOpp = Trigger.oldMap.get(opp.Id);

    //     // Check if the StageName is changing to "Closed Won" and Amount or Account is being modified
    //     if (opp.StageName == 'Closed Won' && (opp.Amount != oldOpp.Amount || opp.AccountId != oldOpp.AccountId)) {
    //         opp.addError('Opportunity is Closed Won. Amount and Account cannot be modified.');
    //     }
    // }