function handleSubmit(event) {
    event.preventDefault(); 

    const username = document.getElementById("first").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Form submitted successfully");
}