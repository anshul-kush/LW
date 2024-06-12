global class RemindOppOwners implements Schedulable {
 global void execute (SchedulableContext ctx){
    List<Opportunity> oppList = [Select Id,Name,OwnerId,CloseDate from Opportunity where IsClosed=False 
                                and CloseDate<TODAY];
    TaskUtils.RemindOwners(oppList);
 }
}