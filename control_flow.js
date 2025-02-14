// if statement

if (true){
 //if the condion is true then block code run hoga 
}
if (false){
 // if the conditon is flase this code never run 
}

let emaillogin = false;
let facebookLogin = false;

let userlogedIn = true;
let debitCard = true;

if (userlogedIn && debitCard) {
    console.log(" && operator me dono conditon shi honi chiye ");
}

if (facebookLogin || emaillogin) {
    console.log("jb b || oprator use krte hai to hme isme codditon ete hai ya to phle wali true ho ya dusri wali dono me se koi ek ture honi chiye");
}