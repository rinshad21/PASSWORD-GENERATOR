
document.addEventListener('DOMContentLoaded', function () {
    const passwordBox = document.getElementById("password");
    const copyButton = document.getElementById("copyButton");
    const generateButton = document.getElementById("generateButton");
    
    let passwordLength = 8;
    
    document.getElementById("length8").addEventListener("change", function () {
        if (this.checked) {
            passwordLength = 8;
        }
    });

    document.getElementById("length12").addEventListener("change", function () {
        if (this.checked) {
            passwordLength = 12;
        }
    });
   

    
    function createPassword() {
        console.log("Button clicked!"); // Debugging

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbols = "~!#$%^&*_";
        const allChars = upperCase + lowerCase + number + symbols;

        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while (password.length < passwordLength) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
    }
     generateButton.addEventListener("click", createPassword);
    copyButton.addEventListener("click", () => {
        if (passwordBox.value === ""){
            alert("please generate the password first");
    }   else {
            navigator.clipboard.writeText(passwordBox.value);
            alert("password copied to clipboard");
    }
    });

});
