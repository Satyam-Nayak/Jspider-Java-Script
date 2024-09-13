function login(){
    let uname = document.querySelector("#uname").value
    let pword = document.querySelector("#pword").value

    if(uname == "abcd" && pword == "1234"){
        alert("Login Success");
    }
    else {
        alert("Invalid Username or Password");
    }
}

function show(){
    let pword = document.querySelector('#pword');
    if (pword.type == "password") {
        pword.type = "text"
    } else {
        pword.type = "password"
    }
}