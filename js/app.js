/**
 * 
 * Create password varible to take input from the user
 * Access to submit btn
 * 
 *Add event listener to submit btn

 Create regex that contains all requirements for password input

 Create a function that checks to see if password input passes test
 * 
 * 
 */


//  Submit Button

let submitBtn = document.getElementById('submitBtn');

// Event Listener for button
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    // console.log('click');
    // Call the test function from below to work when clicked
    test();
});

const test =()=> {
    // get password from user
    // -----------------------------------------------------
    let password = document.getElementById('pswd').value;
    console.log(password);

    // result
    // -----------------------------------------------------
    let result = document.getElementById('result');

    // Check Password Strength
    // -----------------------------------------------------
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,^,*,?,_,~,-,(,)]/;

    let min_weak_password = 5;
    let min_medium_password = 7;
    let min_strong_password = 8;

    let input_weak = password.match(regExpWeak);
    let input_medium = password.match(regExpMedium);
    let input_strong = password.match(regExpStrong);

    // Test Inputs
    // -----------------------------------------------------
    if (password) {
        if (password.length <= min_weak_password || (input_weak || input_medium || input_strong)) {

            result.innerText = 'Your password is too weak.';
            result.style.color = "red";
        };
        
        if (password.length >= min_medium_password && ((input_weak && input_medium) || (input_medium && input_strong))){

            result.innerText = 'You password is medium strength';
            result.style.color = "orange";

        };

        if (password.length >= min_strong_password && input_weak && input_medium && input_strong){

            result.innerText='Your password is strong';
            result.style.color = "green";

        };

        }else{
            result.innerText = 'Enter a valid password';
        };
    };
