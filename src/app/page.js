import Home from "./Home/Home";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Page() {
  return (
   <div>
    <ToastContainer />
    <Home />
    {/* <Footer /> */}
   </div>
  );
}
