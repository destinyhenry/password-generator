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
    }