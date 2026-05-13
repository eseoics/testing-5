const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

test("pop, tar bort och returnerar den sista pushade drickan", () => {
    stack.push("nocco");
    stack.push("latitude");
    expect(stack.pop()).toBe("latitude");
});