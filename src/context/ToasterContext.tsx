import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return ( 
    <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'white',
            },
          },
          error: {
            style: {
              background: 'white',
            },
          },
        }}
        gutter={5}
        position="top-right"
    />
   );
}
 
export default ToasterContext;