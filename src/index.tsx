import  ReactDom  from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import './index.css'
import { Store } from "./modules/mainApp/store/inde";
ReactDom.render(
   <Provider store={Store} >
        <App />
   </Provider> , document.querySelector("#root")
)