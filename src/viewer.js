import { useParams } from "react-router-dom"
import { ethers } from "ethers";
import authContext from "./authcontext";
import { useContext, useEffect } from "react";

const Viewer = () => {
    useEffect(() => {getToken();}, []);
    let {tokenID} = useParams()
    const {auth, setAuth} = useContext(authContext)
    const getToken = async () => {


        const signer = auth.getSigner()
        const acct = await signer.getAddress()
        console.log(acct)
        var result = await fetch('http://localhost:3030/viewer?' + new URLSearchParams({
          id: tokenID,
          address: acct,
        }).toString()).then(res => res.json())
        console.log(result)
    }
    return(
        <>
            {tokenID}
        </>
    )

}


export default Viewer