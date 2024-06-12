public with sharing class AccountContactCalc {
    @future
    public static void countContacts(List<Id> accIds) {
        List<Account> accList = [Select Id, (Select Id from Contacts)
        FROM Account where Id IN: accIds];

        for(Account acc : accList){
            acc.ContactSize__c=acc.Contacts.Size();
        }
        if(!acclist.isEmpty()){
            update accList;
        }
    }
}