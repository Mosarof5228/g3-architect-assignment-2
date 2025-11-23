

const handleSignUp = (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
    
  console.log(name, email, password);
  alert("Successfully SignUp")
};


const handleLogin= (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const password = formData.get("password");
    
  console.log(name,password);
  alert("Successfully SignUp")
};



