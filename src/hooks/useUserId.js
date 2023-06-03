import {useContext} from "react";
import {UserIdContext} from "../context/context";

export const useUserId = () => {
    return useContext(UserIdContext)
}