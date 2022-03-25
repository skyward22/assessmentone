const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the Password Validator tool, Hit Enter on keyboard.", function(input){
	tokens = input.split(' ');
    reader.question("Please enter password:", function(input){
        tokens = input.split(' ');
	

let correctpassword = 10;


	if(correctpassword === 10) {
		console.log("success")
	} else {
		"invalid"
	}

	// This line closes the connection to the command line interface.
	reader.close()

});



});


