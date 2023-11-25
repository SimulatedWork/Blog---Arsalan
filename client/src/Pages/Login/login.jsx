import React from "react";
import "./login.css";
import leftMail from "../../Images/leftMail.svg";
import leftRobo from "../../Images/leftRobo.svg";
import rightSearch from "../../Images/rightSearch.svg";
import bottomGuysKey from "../../Images/bottomGuys-key.svg";
import bottomGuysLeft from "../../Images/bottomGuys-left.svg";
import bottomGuysMid from "../../Images/bottomGuys-mid.svg";
import bottomGuysRight from "../../Images/bottomGuys-right.svg";
import loginMan from "../../Images/loginMan.svg";
import catchPhrase from '../../Images/catchPhrase.svg';
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  console.log(clientId);

  // const onSuccess = (res) => {
  //     console.log("Login Success! Current User: ", credentialResponse);
  // }

  // const onSuccess = async (credentialResponse) => {
  //   const tokenId = credentialResponse.tokenId;
  
  //   try {
  //     const response = await fetch("http://localhost:8000/api/google-authenticate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ tokenId }),
  //     });
  
  //     const data = await response.json();
  //     console.log(data);
  
  //     // Use the user data received from the backend as needed.
  //   } catch (error) {
  //     console.error('Error calling backend:', error);
  //   }
  // };

  // const onFailure = (res) => {
  //   console.log("Login Failed! Response: ", res);
  // }


  return (
    <div className="loginBg">
      {/* <p>Login</p> */}
      <div className="divMail">
        <img className="leftMail" src={leftMail} alt="leftMail" />
      </div>
      <div className="divRobo">
        <img className="leftRobo" src={leftRobo} alt="leftRobo" />
      </div>
      <div className="divSearch">
        <img className="rightSearch" src={rightSearch} alt="rightSearch" />
      </div>

      <div className="loginContainer"></div>
      <div className="loginManContainer">
        <img className="loginMan" src={loginMan} alt="loginMan" />        
      </div>
      <div className="googleButton">
        <GoogleLogin
            size="large"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            // onSuccess={onSuccess}
            // onFailure={onFailure}
            onError={() => {
              console.log("Login Failed");
            }}
          />
      </div>
      <div className="catchPhraseContainer">
        <img className="catchPhrase" src={catchPhrase} alt="catchPhrase" />  
      </div>

      <div className="people">
        <div className="peopleInisdeIndex">
          <img
            className="group groupKey"
            src={bottomGuysKey}
            alt="bottomGuys-key"
          />
        </div>
        <div className="peopleOverIndex">
          <img
            className="group groupOldman"
            src={bottomGuysLeft}
            alt="bottomGuys-left"
          />
          <img
            className="group groupGirl"
            src={bottomGuysMid}
            alt="bottomGuys-mid"
          />
          <img
            className="group groupBoy"
            src={bottomGuysRight}
            alt="bottomGuys-top "
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
