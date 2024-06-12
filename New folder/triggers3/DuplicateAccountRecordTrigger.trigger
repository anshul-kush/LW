trigger DuplicateAccountRecordTrigger on Account (before insert,before Update) {
    DuplicateAccountRecordTriggerDispatcher.DuplicateAccountRecordTriggerDispatch(Trigger.OperationType);
}