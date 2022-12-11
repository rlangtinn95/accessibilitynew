function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("First name must be filled out");
        return false;
      }

      let y = document.forms["myForm"]["lname"].value;
      if (y == ""){
            alert("Last name must be filled out");
            return false;
      }

      let z = document.forms["myForm"]["email"].value;
      if (z == ""){
            alert("Email must be filled out");
            return false;
      }

      let a = document.forms["myForm"]["DOB"].value;
      if (a == ""){
            alert("Date of birth must be filled out");
            return false;
      }

      let b = document.forms["myForm"]["address"].value;
      if (b == ""){
            alert("Last name must be filled out");
            return false;
      }


}