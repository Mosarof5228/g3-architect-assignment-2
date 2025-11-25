function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
}




function handleSignUp(event) {
    event.preventDefault();

    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration successful!");
    document.getElementById('signUpForm').reset();
}




