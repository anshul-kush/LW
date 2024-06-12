trigger billingToShipping on Account (before insert,before update) {
    for (Account acc : Trigger.new) {
        if (acc.ShippingStreet != null) {
            acc.BillingStreet = acc.ShippingStreet;
            acc.BillingCity = acc.ShippingCity;
            acc.BillingState = acc.ShippingState;
            acc.BillingPostalCode = acc.ShippingPostalCode;
            acc.BillingCountry = acc.ShippingCountry;
        }
    }
}

//an Apex Trigger so that every time when any account is created or updated 
//then Set the Value of the Billing Address is to Shipping Address.