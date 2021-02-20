class users{
    userId:number;
    firstName:String;
    lastName:String;
    emailAddress:String;
    password:String;
    
    constructor(userId:number, firstName:String, lastName:String, emailAddress:String, password:String)
    {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;        
        this.emailAddress = emailAddress;
        this.password = password;
    }
}

export {users}