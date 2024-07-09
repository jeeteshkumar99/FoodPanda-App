function signUpAdmin(){
    let email = document.querySelector('#semail').value
    let password = document.querySelector('#spassward').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Passward',password)
   
    location.href = './adminSignin.html' 
}
function signUpUser(){
    let email = document.querySelector('#semail').value
    let password = document.querySelector('#spassward').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Passward',password)
   
    location.href = './login.html' 
}
function signIn(){
    
    let email = document.querySelector('#lemail').value
    let password = document.querySelector('#lpassward').value
    if(localStorage.getItem('Email') == email && localStorage.getItem('Passward') == password ){
        location.href = './restaurant.html'
    }else{
        alert("Please signup first")
        location.href = './signup.html'
    }
}
