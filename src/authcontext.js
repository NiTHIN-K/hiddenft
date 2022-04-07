import { createContext } from "react";
const authContext = createContext({provider: null, setProvider: (auth) => {}})

export default authContext