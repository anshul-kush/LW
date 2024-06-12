public with sharing class ContactController {
    @AuraEnabled(cacheable=true) //annotation used to call a method of apex class in LWC
    //cacheable to cahe the list of particular obect you are using
    public static List<Contact> getContacts(String accId) {
// with sharing denotes record level security, user using 
//this class will see the records based on his sharing and access
        try{
            return [
                Select AccountId, Id, FirstName ,LastName
                FROM Contact 
                WHERE AccountId =:accId
                WITH SECURITY_ENFORCED  // Object and field level security 
            ];
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }

    }
}
/*
DateTime currentUTC = System.now();
TimeZone estTimeZone = TimeZone.getTimeZone('America/New_York');
Time currentESTTime = currentUTC.time().addSeconds(estTimeZone.getOffset(currentUTC) / 1000);

DateTime utcOneHourAgo = currentUTC.addHours(-1);
Time oneHourAgoESTTime = utcOneHourAgo.time().addSeconds(estTimeZone.getOffset(utcOneHourAgo) / 1000);
Integer caseCount = [SELECT COUNT() FROM Case WHERE CreatedDate >= :utcOneHourAgo];

System.debug('Between ' + oneHourAgoESTTime + ' EST time and ' + currentESTTime + ' EST time');
System.debug('UTC ' + utcOneHourAgo + ' and ' + currentUTC) ;
System.debug('Count of cases is: ' + caseCount);

*/