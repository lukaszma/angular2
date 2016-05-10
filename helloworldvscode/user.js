var User = (function () {
    function User(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    User.prototype.hello = function () {
        return "Hello, " + this.fullname;
    };
    return User;
})();
var user = new User("Łukasz", "Matyja");
console.log(user.hello());
alert(user.hello());
//# sourceMappingURL=user.js.map