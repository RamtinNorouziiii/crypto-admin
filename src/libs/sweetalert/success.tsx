/* eslint-disable @typescript-eslint/no-unused-vars */
import withReactContent from "sweetalert2-react-content"
import sweetalert from "sweetalert2";
import { SuccessHtmlSweetAlert } from "./html/success";


    const SucessSweet=withReactContent(sweetalert)
   export  const SuccessSwetAlertStart=()=>{
    SucessSweet.fire({
        icon: 'success',
        title: 'موفق',
        html:<> <SuccessHtmlSweetAlert /> </>,
        showConfirmButton:false,
        
        });
    }
   