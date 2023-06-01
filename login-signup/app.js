// function signup() {
//     const email = document.getElementById("signEmail").value;
//     const pass = document.getElementById("signPass").value;
    
//     if (validateEmail(email) && validatePassword(pass)) {
//       saveToLocalStorage(email, pass);
//     } else {
//       alert("Invalid email or password");
//     }
  
//     console.log(email, pass);
//   }
  
//   function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   function validatePassword(pass) {
//     const numRegex = /[0-9]/;
//     const alphaRegex = /[a-zA-Z]/;
//     const symbolRegex = /[!@#$%^&*()]/;
  
//     const hasNumber = numRegex.test(pass);
//     const hasAlpha = alphaRegex.test(pass);
//     const hasSymbol = symbolRegex.test(pass);
  
//     return hasNumber && hasAlpha && hasSymbol && pass.length >= 8;
//   }
  
//   function saveToLocalStorage(email, pass) {
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', pass);
  
//     alert('Signup Successful!');
//   }
  
//   function signin() {
//     var loginEmail = document.getElementById("email").value;
//     var loginPass = document.getElementById("password").value;
  
//     if (loginEmail === localStorage.getItem('email') && loginPass === localStorage.getItem('password')) {
//       alert("Access granted!");
//     } else {
//       alert("Access denied!");
//     }
//   }
  

/// for multiple users


function signup(){

    const email = document.getElementById("signEmail").value;
    const pass = document.getElementById('signPass').value;

    if(validateEmail(email)&& validatePassword(pass)){
        const userDate = {
            email: email,
            password: pass,
        };
        saveUserToLocalStorage(userDate);
        alert('Signup Successfull!');
    } else {
        alert('Please enter a valid email and password.');
    }
    console.log(email,pass);
}

function saveUserToLocalStorage(userDate){
    let users = JSON.parse(localStorage.getItem('users')) ||[];
    users.push(userDate);
    localStorage.setItem("users", JSON.stringify(users));


}


function validateEmail(email){
    const emailRegex = /[!@#$%^&*()]/;
    return emailRegex.test(email);
}

function validatePassword(pass){
    const alphaRegex = /[a-zA-Z]/;
    const numRegex = /[0-9]/;
    const symbolRegex = /[!@#$%^&*()]/;

    const hasNumber = numRegex.test(pass);
    const hasAlpha = alphaRegex.test(pass);
    const hasSymbol = symbolRegex.test(pass);

    return hasNumber && hasAlpha && hasSymbol && pass.length >= 8;

}


function signin(){
    var loginEmail = document.getElementById("email").value;
    var loginPass = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matcheduser = users.find(user => user.email === loginEmail && user.password === loginPass );
    if(matcheduser){
        alert("Access Granted!");
    } else {
        alert("Access denied@!");
    }
}



// placeholder anime


document.getElementById("email").addEventListener("focus",function(){
    this.placeholder = "";
})
document.getElementById("email").addEventListener("blur",function(){
    this.placeholder = "Type you email";
})
document.getElementById("password").addEventListener("focus",function(){
    this.placeholder = "";

})
document.getElementById("password").addEventListener("blur",function(){
    this.placeholder = "Type your password";
})
