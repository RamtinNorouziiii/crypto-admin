/* eslint-disable @typescript-eslint/no-unused-vars */
import withReactContent from "sweetalert2-react-content";
import sweetalert from "sweetalert2";
import { FailHtmlSweetAlert } from "./html/fail";

    const FailSweet=withReactContent(sweetalert)
    export const FailSwetAlertStart=()=>{
        FailSweet.fire({
          icon: 'error',
          title: 'خطا',
          html:<> <FailHtmlSweetAlert /> </>,
          showConfirmButton:false
          });
    }

