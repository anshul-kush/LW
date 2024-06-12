trigger accountNoOfContacts on Account (before insert,before update) {
    List<Account> accountsToUpdate = new List<Account>();
    for (Account acc : Trigger.new) {
        AggregateResult result = [SELECT COUNT(Id) contactsCount FROM Contact WHERE AccountId = :acc.Id ];
        Integer contactCount = Integer.valueOf(result.get('contactsCount'));
        acc.Number_of_contacts__c=contactCount;
        accountsToUpdate.add(acc);
        contactCount=0;
    }
}