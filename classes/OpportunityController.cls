public class OpportunityController {
@AuraEnabled(cacheable=true)
public static List<Opportunity> getAllOpportunities(){
    return [Select Name,StageName,CloseDate,Amount 
           FROM Opportunity 
           WITH SECURITY_ENFORCED];
}
}