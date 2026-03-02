import { useEffect, useState } from "react"
import AuthRouter from "./module/router/AuthRouter";
import PublicRouter from "./module/router/PublicRouter";
import { useNavigate } from "react-router-dom";

export default function App() {
  const[session, setSession]=useState(false);

  useEffect(() => {
    if(!session && !!sessionStorage.getItem('token')){
      setSession(true);
    }

  },[session]);

  return ( session?(
      <AuthRouter setSession={setSession}/>
  ) : (
      <PublicRouter setSession={setSession}/>
  )
   
  );
}

