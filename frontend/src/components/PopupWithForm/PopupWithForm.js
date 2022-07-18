import React from "react";
const PopupWithForm = (props) => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isSignin, setIsSignin] = React.useState(true);
  const [signinValues, setvalue] = React.useState({
    email: "",
    password: "",
  });
  const [signupValues, setValueSignup] = React.useState({
    email: "",
    password: "",
    name:""
  });
const closeSuccessPopUp= ()=>{
  setIsSignin(true);
  setIsSuccess(false);
  props.onClose()
}


// func from App
  const onSubmitSignup = async (evt) => {
    evt.preventDefault();
   
    const status = await props.createNewUser(signupValues);
    isSuccessSignup(await status)
  };

// func from App
  const onSubmitSignin = async (evt) => {
    evt.preventDefault();
     const token = await props.login(signinValues);
     if( token.token){
      localStorage.clear()
      localStorage.setItem('jwt', token.token)
      props.onClose()
     }else{
      console.log("the user with the specified email not found "); 
     }
    
  };




  const handleChange = (e) => {
    
    const { name, value } = e.target;
   
   if( !isSignin){
    setValueSignup({
      ...signupValues,
      [name]: value,  
    })
    console.log('handel' , isSignin , name, value);
   }else{
    setvalue({
      ...signinValues,
      [name]: value,
    });
   }

 
  };


  const isSuccessSignup = (statusIsTrue) => {
    console.log(statusIsTrue);
    statusIsTrue?setIsSuccess(true):setIsSuccess(false)
  };



  if (isSuccess && !isSignin) {
    //success popup
    return (
      <div
        onClick={() => {
          closeSuccessPopUp()

        }}
        className={props.isOpen ? "popup popup_open" : "popup"}
      >
        <div className="popup__block">
          <button onClick={closeSuccessPopUp} className="popup__close-btn"></button>
          <p className="popup__text">Registration successfully completed!</p>
          <div className="popup__subtitle">
            <p
              onClick={closeSuccessPopUp}
              className="popup__link-success"
            >
              Sign in
            </p>
          </div>
        </div>
      </div>
    );
  }

  //--------------------------------------------signup
  if (!isSignin) {
    return (
      <div
        onClick={props.onClose}
        className={props.isOpen ? "popup popup_open" : "popup"}
      >
        <div
          onClick={(evt) => {
            evt.stopPropagation();
          }}
          className="popup__block"
        >
          <button onClick={props.onClose} className="popup__close-btn"></button>
          <form
            className="popup__form"
            onSubmit={onSubmitSignup}
            action="#"
            method="POST"
            name={"signup"}
          >
            <h1 className="popup__tittle">sign up</h1>
            <label htmlFor="email" className="popup__label">
              Email
            </label>
            <input
              id="email"
              value={signupValues.email}
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              minLength="5"
              maxLength="40"
              autoComplete="on"
              className="popup__input"
              onChange={handleChange}
            />

            <label htmlFor="password" className="popup__label">
              password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
               value={signupValues.password }
              required
              minLength="8"
              maxLength="40"
              onChange={handleChange}
              autoComplete="on"
              className="popup__input"
             
            />
            <label htmlFor="name" className="popup__label">
              Username
            </label>
            <input
              id="name"
         
              placeholder ="Enter your name"
              name="name"
              required
              minLength="2"
              maxLength="40"
               onChange={handleChange}
              autoComplete="on"
              className="popup__input"
              value={signupValues.name}
            />

            {props.children}
            <button
              className="popup__button"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <p className="popup__subtitle">
            or{" "}
            <span
              onClick={() => {
                setIsSignin(true);
              }}
              className="popup__link "
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      //signin

      <div
        onClick={props.onClose}
        className={props.isOpen ? "popup popup_open" : "popup"}
      >
        <div
          onClick={(evt) => {
            //cancel onClick func on that div
            evt.stopPropagation();
          }}
          className="popup__block"
        >
          <button onClick={props.onClose} className="popup__close-btn"></button>
          <form
            className="popup__form"
            onSubmit={onSubmitSignin}
            action="#"
            method="POST"
            name={"signin"}
          >
            <h1 className="popup__tittle">sign in</h1>
            <label htmlFor="email" className="popup__label">
              Email
            </label>
            <input
              value={signinValues.email}
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
           
              required
              minLength="5"
              maxLength="40"
              onChange={handleChange}
              autoComplete="on"
              className="popup__input"
            />

            <label htmlFor="password" className="popup__label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={signinValues.password}
              required
              minLength="8"
              maxLength="40"
              onChange={handleChange}
           
              autoComplete="on"
              className="popup__input"
            />
            {props.children}
            <button className="popup__button" type="submit" href="">
              Sign in
            </button>
          </form>
          <p className="popup__subtitle">
            or{" "}
            <span
              onClick={() => {
                setIsSignin(false);
              }}
              className="popup__link"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    );
  }
};
export default PopupWithForm;
