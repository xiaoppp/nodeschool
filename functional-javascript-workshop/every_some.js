"use strict";

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // console.log(goodUsers);
        // console.log(submittedUsers);

        return submittedUsers.every(u => {
            return goodUsers.indexOf(u) != -1
        })
    };
}

module.exports = checkUsersValid;