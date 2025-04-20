import { axiosSecure } from "../Apis/axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
const useRole = () => {
   const {user,loading}=useAuth();

   const {
     data: role,
     isLoading,
     error,
   } = useQuery({
     queryKey: ["user-role", user?.email],
     enabled: loading && !!user?.email,
     queryFn: async () => {
       const res = await axiosSecure.get(`/users/role/${user?.email}`);
       return res.data?.role;
     },
   });
   return {role,isLoading,error}
}
export default useRole;