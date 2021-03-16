class users{
    userId:number;
    firstName:string;
    lastName:string;
    emailAddress:string;
    password:string;
    
    constructor(userId:number, firstName:string, lastName:string, emailAddress:string, password:string)
    {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;        
        this.emailAddress = emailAddress;
        this.password = password;
    }

    toJSON()
    {
        let newUser = <any>  new users(this.userId, this.firstName, this.lastName, this.emailAddress, '');
        delete newUser.password;

        return newUser;
    }
}

export {users}