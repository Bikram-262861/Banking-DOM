const clickBtn = document.getElementById("click_btn");

clickBtn.addEventListener("click", function() {
    // default admin access

    const userGmail = "junpuranjan249@gmail.com";
    const userPassword = "puran262861"

    // get user email

    const loginEmail = document.getElementById("login_email");
    const gotEmail = loginEmail.value;
    
    // get user password

    const loginPassword = document.getElementById("login_password")
    const gotPassword = loginPassword.value;

    //  authentication condition

    if(gotEmail === userGmail && gotPassword === userPassword){
        window.location.href = "home.html"
        
    }else{
        alert("User access denied")
    }
       loginEmail.value = "";
       loginPassword.value = "";
    
});