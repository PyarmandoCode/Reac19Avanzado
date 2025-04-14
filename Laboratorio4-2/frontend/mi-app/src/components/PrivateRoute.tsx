import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Children, ReactNode } from "react";

export const PrivateRoute = ({Children}: {Children:ReactNode}) =>{
    const {token} =useAuth()
    return token ? Children:<Navigate to="/login" />
}