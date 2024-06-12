public with sharing class DuplicateAccountRecordTriggerHelper {

    public static void DuplicateAccountRecordPrevent(List<Account> newAccList) {
        Set<String> accNames = new Set<String>();
        Set<String> accRatings = new Set<String>();

        for(Account acc : newAccList){
            accNames.add(acc.Name);
            accRatings.add(acc.Rating);
        }
        List<Account> existingAccounts = [Select Id, Name, Rating 
        FROM Account
        WHERE Name In:accNames
        AND Rating In:accRatings
        And Id Not IN:newAccList
        ];
        for(Account newAcc: newAccList){
            for(Account existingAcc: existingAccounts){
                if(existingAcc.Rating==newAcc.Rating && existingAcc.Name == newAcc.Name){
                    newAcc.Name.addError('Name cannot be duplicate');
                    newAcc.Rating.addError('Rating cannot be duplicate');
                }
            }
        }
    }
}