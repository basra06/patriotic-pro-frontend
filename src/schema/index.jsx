// import * as Yup from "YUP";
import * as Yup from 'yup';
export const SignUpSchema=Yup.object().shape({
    userName:Yup.string().required("Please Enter Your Name"),
    // email:Yup.string().email().required("Enter Your Email"),
    // password:Yup.string().min(6).required("Enter Your Password"),
    companyName:Yup.string().required("Enter Your Company Name "),
    // industry:Yup.string().min(2).max(35).required("Industry is Required"),
    // address:Yup.string().min(5).max(50).required("Address Is Required"),
    // state:Yup.string().min(2).max(40).required("State Is Required"),
    // file:Yup.mixed().required("File is Required"),
})