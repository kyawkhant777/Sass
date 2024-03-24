import { useEffect } from "react"

const LogoutReact=()=>{
  useEffect(()=>{
    localStorage.clear();
    history.push('/LoginReact');
  })
}


export default LogoutReact;
