trigger CalculateOpportunityDiscountTrigger on Opportunity (before insert) {
	triggerDispatcher.dispatch(Trigger.OperationType);
}