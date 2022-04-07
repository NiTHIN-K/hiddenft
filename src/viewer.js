import { useParams } from "react-router-dom"
import { ethers } from "ethers";
import authContext from "./authcontext";
import { useContext } from "react";

const Viewer = () => {
    let {tokenID} = useParams()
    const {auth, setAuth} = useContext(authContext)
    const signer = auth.getSigner()
    const acct = signer.getAddress()
    console.log(acct)
        // const data_safemint = await erc721.functions.safeMint(currAddress, url)
        // await provider.waitForTransaction(data_safemint.hash)
        // const receipt = await provider.getTransactionReceipt(data_safemint.hash);
        // console.log(parseInt(receipt.logs[0].topics[3], 16)); // This is the tokenID
    

    return(
        <>
            {tokenID}
        </>
    )

}


export default Viewer