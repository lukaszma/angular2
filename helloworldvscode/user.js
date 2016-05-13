var Foo = (function () {
    function Foo() {
    }
    Foo.alertName = function (firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        alert(firstName + " " + restOfName.join(" "));
    };
    return Foo;
})();
Foo.alertName("Mr", "John", "Doe");
//# sourceMappingURL=user.js.map