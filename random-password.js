function passOptions() {
    //list of character options presented to user
    var charList = []
  
    //include lowercase characters?
    var includeLowerCase = confirm("Include lowercase?")
    if (includeLowerCase === true) {
      var allLowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
      charList = charList.concat(allLowerCase)
      }
    }