"use strict";
// userPoints
const User = (() => {
    const points = 20;
    const destroyAllPoints = () => points - 10;
    const viewUserPoints = () => points;
    return {
        viewUserPoints
    };
})();
console.log(User.viewUserPoints());
//# sourceMappingURL=index.js.map