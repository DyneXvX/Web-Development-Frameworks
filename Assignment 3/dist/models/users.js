"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
class users {
    constructor(userId, firstName, lastName, emailAddress, password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
    }
    toJson() {
        let newUser = new users(this.userId, this.firstName, this.lastName, this.emailAddress, '');
        delete newUser.password;
        return newUser;
    }
}
exports.users = users;
//# sourceMappingURL=users.js.map