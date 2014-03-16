
    $(document).ready(function() {

      /* Your code goes here */

      // Step 1: Select the Change! button using the ID Selector.
      var button = $("#submit");
   
      // Step 2: Add the click listener to the button.
      $(button).click(function() {

        // Select 3: Select the input and store its value.
        var emailtxt = $("#email").val();

        if (emailtxt=="" || emailtxt.indexOf('@')==-1) {
        	alert("Email address cannot be empty or wrong format!");
        		$("#email").text("");
        	 
        };

        // Step 3: Use selectors to find the element to replace the text.
        var pwd = $("#password").val();
        var repwd = $("#repassword").val();

        if (pwd!=repwd) {
        	alert("You enter the password twice inconsistency!");
        	$("#password").text("");
        	$("#repassword").text("");
        };

       

      });   

    });
