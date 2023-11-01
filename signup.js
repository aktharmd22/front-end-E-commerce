
function validateForm() 
{
	let msg=document.getElementById('smallMsg');
	let msg2=document.getElementById('smallMsg2');
	let msg3=document.getElementById('smallMsg3');
	let msg4=document.getElementById('smallMsg4');
	let msg5=document.getElementById('smallMsg5');
	let msg6=document.getElementById('smallMsg6');
	let msg7=document.getElementById('smallMsg7');

	let mail=document.getElementById('mailValidate');
	const fname=document.regForm.firstName.value;
	const lname=document.regForm.lastName.value;
	if(fname== "" || fname==null)
	{
		
		msg.innerText="Enter The First Name";
		return false;
	}else{
		msg.innerText="";
	}

	if (lname=="" || lname==null){
		msg2.innerText="Enter The Last Name"; 
		  return false; 
	}
	else{
		msg2.innerText="";
	}

	//Email validation

	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	  if (mail.value.match(validRegex)) { 

	    	msg3.innerText="" 

	  } 
	  else {
	   	msg3.innerText="Invalid Email Address!" 
	   	return false;
	    
	}

  //password validation

  
  let pass=document.getElementById('password').value;

  let lowerCaseLetters = /[a-z]/g;
	  if(pass=="" || pass==null){
	  	msg4.innerText="Enter Password";
	  	return false;
	  }

	  if(pass.match(lowerCaseLetters)) {  
	   msg4.innerText="";

	  } else {
	     msg4.innerText="Password must contain atleast one lowerCase Letter";
	     return false;
	  }

	  // Validate capital letters
	  var upperCaseLetters = /[A-Z]/g;
	  if(pass.match(upperCaseLetters)) {  
	    msg4.innerText="";
	  } else {
	    msg4.innerText="Password must contain atleast one upperCase Letter";
	     return false;
	  }

	  // Validate numbers
	  var numbers = /[0-9]/g;
	  if(pass.match(numbers)) {  
	    msg4.innerText="";
	  } else {
	    msg4.innerText="Password must contain atleast one Number value";
	    return false;
	  }

	  // Validate length
	  if(pass.length >= 8) {
	    msg4.innerText="";
	  } else {
	    msg4.innerText="Password must contain atleast 8 Characters";
	     return false;
	  }
	  
  	//confirm password validation

  	let confirmPass=document.getElementById('confirmPassword').value;
  	if(confirmPass.match(pass)){
  		msg5.innerText="";
  	}
  	else{
  		msg5.innerText="Password and confirm Password must be same";
  		return false;
  	}

  	//Mobile Number Validation

  	let mobNum=document.getElementById('mobileNum').value;
  		if(mobNum.match(numbers)){
  			msg6.innerText="";
	  	}
	  	else{
  			msg6.innerText="Mobile Number Should be in Number";
  			return false;
  		}
  	//BirthDate Validation

  	/*let date=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  	let birthDate=document.getElementById('birthDate').value;
  	if (birthDate==null) {
  		msg7.innerText="";
  		return true;

  	}
  	else{
  		msg7.innerText="Enter the Birth Date";
  		return false;
  	}
  	*/
}
