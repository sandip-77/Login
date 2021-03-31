function formValidation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name == null || name == ""){
        alert("Name must be filled out")
        return;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
    alert('Please provide a valid email address');
    return;
    }

    if (password=="" || password.length<6){
        alert("Password must be of 6 characters")
    }


}