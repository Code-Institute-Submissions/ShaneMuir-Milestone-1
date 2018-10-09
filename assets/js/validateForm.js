        function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    
    var email = document.forms["myForm"]["email"].value;
    if (email.length == 0) {
        alert("Email must be filled out");
        return false;
    }
    	

    if(!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        alert("Invalid email address, please try again...");
        return false;
    }
    
    var message = document.forms["myForm"]["message"].value;
    var required = 30;
    var left = required - message.length;
    
    if (left > 0) {
        alert(left + ' more characters required');
        return false;
    }
    
}



