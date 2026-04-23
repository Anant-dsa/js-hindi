const accountId = 4421
let accountEmail = "anant09@google.com"
var accountpassword = "1244"
accountCity ="jaipur" 
//accountState;



/*
prefer not to use var beacause of functional scope
*/
//accountId = 2 // not allowed
accountEmail = "dawg67@google.com"
accountpassword = "8888"
accountCity ="delhi" 

console.log(accountId);
console.table([accountEmail , accountpassword ,accountCity ])
