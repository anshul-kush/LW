trigger checkOppTask on Opportunity (before delete) {
  
    // Check if any Opportunities have associated completed Tasks
    for (Opportunity opp : Trigger.old) {
      List<Task> completedTasks = [SELECT Id FROM Task WHERE Status = 'Completed' AND WhatId = :opp.Id];
      if (!completedTasks.isEmpty()) {
        opp.addError('Cannot delete Opportunity. It has ' + completedTasks.size() + ' associated completed Tasks.');
      }
    }
  }