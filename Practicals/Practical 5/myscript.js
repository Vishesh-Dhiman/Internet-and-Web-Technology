function validateForm() { 
 // Get the form elements 
 var name = document.getElementById("name").value;
 var email = document.getElementById("email").value;
 var age = document.getElementById("age").value;
 if (name == "") { 
 alert("Name must be filled out.");
 return false; 
 } 
 if (email == "") { 
 alert("Email must be filled out.");
 return false; 
 } 
 // Check if the Email is in a valid format 
 var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 if (!emailPattern.test(email)) { 
 alert("Please enter a valid email address.");
 return false; 
 }