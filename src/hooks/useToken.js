import {useContext} from "react";
import {TokenContext} from "../context/context";
export const useToken = () => {
    return useContext(TokenContext);
};