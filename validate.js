function validate()
   {
		var email=document.getElementById("mail").value;
		var regx= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

		
		
		if(email.match(regx))
		{
		alert("Valid email address!");
		document.form1.text1.focus();
		return true;
		}
		else
		{
		alert("You have entered an invalid email address!");
		document.form1.text1.focus();
		return false;
		}

			
		

	}
