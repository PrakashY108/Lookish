import { number, object, string } from "yup";

const authSchemas=object({
    username:string().required("Username cannot be empty"),
    password:string().min(6,"Password must be atleast 6 characters"),
    phonenumber:number(),
    firstname:string().

})