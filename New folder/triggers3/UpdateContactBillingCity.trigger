trigger UpdateContactBillingCity on Account (after update) {
  //First we will store new and old map data in a single map

    // Map to efficiently store new and old Account data
    Map<Id, Account> accountMap = new Map<Id, Account>(Trigger.new);
    accountMap.putAll(Trigger.oldMap);
  
  //2. We will compare the billing city in new and old map and store filterred values in a list
    // List to track Accounts with changed Billing City
    List<Id> updatedAccs = new List<Id>();
    for (Account acc : Trigger.new) {
        Account oldAcc = accountMap.get(acc.Id);
        System.debug('@@@oldacc'+oldAcc);
        System.debug('@@@acc'+acc);
        System.debug('@@@acc.BillingCity'+acc.BillingCity);
        System.debug('@@@ldAcc.BillingCity'+oldAcc.BillingCity);
      if (oldAcc != null && !acc.BillingCity.equals(oldAcc.BillingCity)) {
        updatedAccs.add(acc.Id);
      }
    }

  //3. Query on contact with accountIds stored above and store in a map
    if (!updatedAccs.isEmpty()) {
      Map<Id, Contact> contactMap = new Map<Id, Contact>();
      for (Contact contact : [SELECT Id, MailingCity, AccountId FROM Contact WHERE AccountId IN :updatedAccs]) {
        contactMap.put(contact.Id, contact);
      }
      
  //4. Update contacts object with a new list and updated values
      List<Contact> contactsToUpdate = new List<Contact>();
      for (Id accId : updatedAccs) {
        Account acc = accountMap.get(accId);
        Contact contact = contactMap.get(accId);
        if (contact != null) {
          contact.MailingCity = acc.BillingCity;
          contactsToUpdate.add(contact);
        }
      }
      update contactsToUpdate;
    }
  }