global class HourlyScheduler implements Schedulable {
    global void execute(SchedulableContext sc) {
        // Implement your logic here
        // This method will be executed when the scheduled job runs
        System.debug('HourlyScheduler executed at: ' + DateTime.now());
        // Add your logic here
        UserInfoDebugger.debugUserInfo();
    }
}
