trigger uniqueEmailOnContact on contact (before insert,before update) {
    List<Contact> contEmail = [Select Id, Email from Contact];

    for(Contact cont : trigger.new){
        if(cont.Email!=null){
            List<Contact> contEmail = [Select Id, Email from Contact where Email=:cont.Email];
            if(contEmail.size()>0){
            cont.addError('Email Alrady exists');
            }
        }
    }
}