const accountId = 1223
let accountEmail = "navya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity = "hyderabad"
let accountState


console.log(accountId);

/* 
Prefer not to use var
because of issue in the block scope and functional scope
 */

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])