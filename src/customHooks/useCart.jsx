import { useContext } from "react";
import { AuthContext } from "../AuthProvaiders/AuthProvaiders";
import { useQuery } from "react-query";


const useCart = () => {
    const {user}=useContext(AuthContext);
    const {refetch , data: cart=[]}=useQuery({
        queryKey:['carts' , user?.email],
        queryFn : async ()=>{
            const respone=await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return respone.json();
        }
    })
    return [cart , refetch]
};

export default useCart;