function passOptions() {
    //list of character options presented to user
    var charList = []
  
    //include lowercase characters?
    var includeLowerCase = confirm("Include lowercase?")
    if (includeLowerCase === true) {
      var allLowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
      charList = charList.concat(allLowerCase)
      }
      //include uppercase characters?
    var includeUppercase = confirm("Include uppercase?")
    if (includeUppercase === true) {
      var allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
      charList = charList.concat(allUpperCase)
      }

      //include numbers?
    var includeNumbers = confirm("Include numbers?")
    if (includeNumbers === true) {
      var allNumbers = "1234567890".split("")
      charList = charList.concat(allNumbers)
      } 
    //include special characters?
    var includeSpecialChar = confirm("Include special characters?")
    if (includeSpecialChar === true) {
    var allSpecial = "!$%&'()*+,-./:;<=>?@[\]^_`{|}~ ".split("")
     charList = charList.concat(allSpecial, '"')
    }
    if (charList.length === 0) {
        alert("Select at least one character type. Try again!!")
        return generatePassword()
      }
      return charList;
    
    }
    function generatePassword() {
  
        // pop up prompt inquiring about password length 
        var passLength = prompt("Choose the length of your password", "Any number between 8 ~ 128")
        if (passLength <= 7) {
          alert("Too short!!")
          return generatePassword()
        }
        if (passLength >= 129) {
          alert("I'm sorry that password is too long.")
          return generatePassword()
        }
        if (passLength === null) {
          return;
        }
        if (passLength % 1 !== 0) {
          alert("Please use whole numbers.")
          return generatePassword()
        }
    
    var passwordCharacter = passOptions()
    var newPassword = []
    for (i = 0; i < passLength; i++) {
           var randomCharacter = passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)]
           newPassword = newPassword.concat(randomCharacter)
           password = newPassword.join('')
         }
        
        return password
        }
      
      // generate element
      var generateBtn = document.querySelector("#generate");
      
      // password output
      function displayPassword() {
        var password = generatePassword();
        var passwordOutput = document.querySelector("#password");
      
        passwordOutput.value = password;
      
      }
    
    