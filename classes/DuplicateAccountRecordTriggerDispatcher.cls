public with sharing class DuplicateAccountRecordTriggerDispatcher {
    public static void DuplicateAccountRecordTriggerDispatch(System.TriggerOperation operationType) {
        switch on operationType{
            WHEN BEFORE_INSERT{
                DuplicateAccountRecordTriggerHelper.DuplicateAccountRecordPrevent(Trigger.new);
            }
            WHEN BEFORE_UPDATE{
                DuplicateAccountRecordTriggerHelper.DuplicateAccountRecordPrevent(Trigger.new);
            }
        }
    }
}