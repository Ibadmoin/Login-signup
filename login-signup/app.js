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


function signUp(){
    const email = document.getElementById("signEmail").value;
    const password = document.getElementById("signPass").value;
    const uName = document.getElementById("signName").value;
    if(validateEmail(email) && validatePassword(password)&& validateName(uName)){
        const userDate = {
            email:email,
            password:password,
            username:uName,
        };
        saveToLocalStorage(userDate);

        //sweet alert & redirection to login page

        Swal.fire({
            icon: 'success',
            title: 'Signup Successful!',
            text: 'You can now proceed to login.',
            confirmButtonText: 'Okay'
        }).then( () => {
            window.location.href = "index.html";
        }) 
   
    } else {
        //sweet alert for invalid dteails
        Swal.fire({
            icon: 'error',
            title: 'Invalid Details!',
            text: 'Please enter valid email, password, & name',
            confirmButtonText: 'Okay'
        });
    }
    console.log(email,password,uName);



}


function saveToLocalStorage(userDate){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userDate);
    localStorage.setItem("users",JSON.stringify(users));
}
// validation for emails

function validateEmail(email){
    const emailRegex = /[!@#$%^&*()]/;
    return emailRegex.test(email);
}
// validation for passwords

function validatePassword(password){
    const numRegex = /[0-9]/;
    const alphaRegex = /[a-zA-z]/;
    const symbolRegex = /[!@#$%^&*()]/;

    const hasNumber = numRegex.test(password);
    const hasAlpha = alphaRegex.test(password);
    const hasSymbol = symbolRegex.test(password);

    return  hasNumber && hasSymbol && hasAlpha && password.length >= 8;
}
// validation for usernames
function validateName(uName){
    const nameRegex = /[a-zA-Z]/;
    const hasvalidatename = nameRegex.test(uName);
    const isNotEmpty = uName.trim().length > 0;
    
    return hasvalidatename && isNotEmpty;
    
}


// login via localstorage

function signIn(){
    var loginEmail = document.getElementById("email").value;
    var loginPass = document.getElementById("password").value;
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(user => user.email === loginEmail && user.password === loginPass);
    if(matchedUser){
        // alert("Access");
        // sweet alert for acepting request
        Swal.fire({
            icon: 'success',
            title: 'Access Granted!',
            showConfirmButton: false,
            timer: 2500
        });
    } else {
        // alert("denied");
        // sweet alert for rejecting request
        Swal.fire({
            icon: 'error',
            title: 'Access Denied!',
            text: 'Invalid email or password',
            confirmButtonText: 'OK'
        });
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





// create new account page redirect

function signUpPage(){

    window.location.href = "signup.html";

}
//backto login page redirect

function loginPage(){

    window.location.href="index.html";
}

