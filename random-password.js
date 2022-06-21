// declare variables and assign elements from html

var pwLengthNumber = document.getElementById('pwLengthNumber')

var pwLengthRange = document.getElementById('pwLengthRange')

var form = document.getElementById('passwordGenerator')

var includeUppercaseElement = document.getElementById('includeUppercase')

var includeLowercaseElement = document.getElementById('includeLowercase')

var includeNumbersElement = document.getElementById('includeNumbers')

var includeSpecialElement = document.getElementById('includeSpecial')

var pwDisplay = document.getElementById('pwDisplay')

// make password length selection sync and range selector

pwLengthNumber.addEventListener('input', synchPwAmount)
pwLengthRange.addEventListener('input', synchPwAmount)

function synchPwAmount (e) {
    var value = e.target.value
    pwLengthNumber.value = value
    pwLengthRange.value = value
}

// declare variable and assign low to high range arrays to correlate to ASCII charcter codes

var UpperCharCodes = arrayFromLowToHigh(65, 90)
var LowerCharCodes = arrayFromLowToHigh(97, 122)
var NumberCharCodes = arrayFromLowToHigh(48, 57)

// concactinate arrays because they are not consecutively listed

var SpecialCharCodes = arrayFromLowToHigh(33, 47)
    .concat(
    arrayFromLowToHigh(58,64)
    )
    .concat(   
    arrayFromLowToHigh(91,96)
    )
    .concat(
    arrayFromLowToHigh(123, 126)
    )

// prevent button from reseting page to default and to display password

form.addEventListener('submit', event => {
    event.preventDefault()
    var characterAmount = pwLengthNumber.value
    var includeLowercase = includeLowercaseElement.checked
    var includeUppercase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSpecial = includeSpecialElement.checked
    
    var password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSpecial)
    pwDisplay.innerText = password
})

// generate the password

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    var charCodes = [0]
    if (includeLowercase) charCodes = charCodes.concat(LowerCharCodes)
    if (includeUppercase) charCodes = charCodes.concat(UpperCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(NumberCharCodes)
    if (includeSpecial) charCodes = charCodes.concat(SpecialCharCodes)
    
// Create a variable with an empty array to save the results of the function. 

    var passwordCharacters = []

// for loop based on the chosen characterAmount by user
    for (var i = 0; i <= characterAmount; i++){ 

// this variable is the result of a random number generated between .0 and 1 * the length of the ASCII code array and the pushed into the passwordCharacter array as a sting?
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

// for loop to go through variable in the characters and create an array of charset 

function arrayFromLowToHigh(low, high) {
    var array = []
    for (var i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}





