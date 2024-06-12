public with sharing class triggerDispatcher {
    /**
    * @description: Dispatches trigger handling based on the specified operation type.
    * @param operationType: Trigger operation type (e.g., BEFORE_INSERT).
    */
    public static void dispatch(System.TriggerOperation operationType){
        // Switch on the specified operation type
        switch on operationType{
            // When the trigger operates before insert
            WHEN BEFORE_INSERT{
                // Call the handleBeforeInsert method of OpportunityDiscountTriggerHandler
               // OpportunityDiscountTriggerHandler.handleBeforeInsert(trigger.new);
            }
            // Add more cases for other trigger operations if needed
        }
    }
}