//Develop an Apex Trigger to send the email to the Account owner 
//when the Account is Created within Salesforce and Account does not have the phone and industry field populated.

trigger sendMailAccount on Account (after insert) {
    for(Account acc: trigger.new){
        if (String.isBlank(acc.Industry) && acc.Phone==null ) {
        List<Messaging.SingleEmailMessage> mailList =  new List<Messaging.SingleEmailMessage>();
        // select id,name from EmailTemplate where id='00X5g000004MJOLEA4';
                if (acc.Email__c != null) {
                    Messaging.SingleEmailMessage newMail = new Messaging.SingleEmailMessage();
                    List<String> sendToAddressesList = new List<String>();
                    sendToAddressesList.add(acc.Email__c);
                    newMail.setTemplateId('00X5g000004MJOLEA4');
                    newMail.setToAddresses(sendToAddressesList);
                    newMail.setSubject('Account Alert');
                    // String body = 'Dear '+Acc.Owner.Name+', A new account '+Acc.Name+' has been created in Salesforce'; 
                    // body += 'The account is missing some important information Phone & Industry.';     
                    // body += 'Please try to collect this information and update the account ASAP.';     
                    //newMail.setHtmlBody(body);
                    mailList.add(newMail); 
                    System.debug('@@@'+mailList);    
                }
       
        Messaging.sendEmail(mailList);
        }
    }
}