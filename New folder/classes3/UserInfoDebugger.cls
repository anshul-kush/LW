public with sharing class UserInfoDebugger {
    public static void debugUserInfo() {
        // Generate unique data for each field
        String uniqueString = String.valueOf(DateTime.now().getTime());
        
        // Insert Account
        Account acc = new Account();
        acc.Name = 'Account ' + uniqueString;
        // Add any other fields you want to populate
        insert acc;
        
        // Insert Opportunity
        Opportunity opp = new Opportunity();
        opp.Name = 'Oppo ' + uniqueString;
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.today().addDays(30);
        opp.Amount = 1000.00;
        // Add any other fields you want to populate
        opp.AccountId = acc.Id; // Associate the Opportunity with the Account
        insert opp;
        
        // Insert Contact
        Contact con = new Contact();
        con.FirstName = 'John ' + uniqueString;
        con.LastName = 'Doe ' + uniqueString;
        con.Email = 'john.doe.' + uniqueString + '@example.com';
        // Add any other fields you want to populate
        con.AccountId = acc.Id; // Associate the Contact with the Account
        insert con;
        System.debug('User ID: ' + UserInfo.getUserId());
        System.debug('Username: ' + UserInfo.getUserName());
        System.debug('User Email: ' + UserInfo.getUserEmail());
        System.debug('Profile ID: ' + UserInfo.getProfileId());
        System.debug('Session ID: ' + UserInfo.getSessionId());
        System.debug('Organization ID: ' + UserInfo.getOrganizationId());
        System.debug('Organization Name: ' + UserInfo.getOrganizationName());
        System.debug('Locale: ' + UserInfo.getLocale());
        System.debug('Timezone: ' + UserInfo.getTimezone());
        System.debug('UI Theme: ' + UserInfo.getUiTheme());
        System.debug('Language: ' + UserInfo.getLanguage());
    }
}