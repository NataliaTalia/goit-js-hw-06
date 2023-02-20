const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)


function onFormSubmit (event) {
    event.preventDefault();

   const {
    elements: {email, password}
   } = event.currentTarget;


   if(email.value === "" || password.value === "") {
    return alert('This field cannot be empty');

  } 

  const formData = {
    email: email.value,
    password: password.value,
  }

  event.currentTarget.reset();

  console.log(formData)
  
//    const formData = new FormData(event.currentTarget);

//    formData.forEach((value, name) => {
//     console.log(value, name)
//    })
}