//import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInWithPopup,signInWithRedirect,GoogleAuthProvider,onAuthStateChanged,getRedirectResult } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect,useState} from "react";
import '../Style/global.css';
import GoogleIcon from '@mui/icons-material/Google';
//import { useEffect,useState } from "react";
import './firebase';
export default function Login(){
 // const [mytoken,settoken]=useState(0);
  const Navigate=useNavigate();
 // const user=getAuth().currentUser;
const [loading,setloading]=useState(false);
  useEffect(()=>{
    const auth = getAuth();
    setloading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Navigate("/class");
      } 
      else
      setloading(false)
    });
  },[])

   /*useEffect(() => {
     if(user)
     Navigate("/admin");
      }, [Navigate,user]); */
    function loginwithgoogle(){
      setloading(true);
      const provider = new GoogleAuthProvider();
          const auth = getAuth();
      //    signInWithRedirect(auth, provider);
         signInWithPopup(auth, new GoogleAuthProvider())
          .then(()=>{
            Navigate("/class");
          })
          .catch(err=>{console.log(err); setloading(false)})
    /*    getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
   // const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    setloading(false);
    Navigate('/class');
  }).catch((error) => {
    setloading(false);
    console.log(error);
  })  */   
        }
    return (
<div   className="loginbutton">
<Button variant="outlined" startIcon={<GoogleIcon />} onClick={loginwithgoogle} disabled={loading}>
LogIn with google
</Button>
</div>
    );
}