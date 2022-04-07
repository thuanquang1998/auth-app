import * as React from "react";
import { ToastContainer } from "react-toastify";

const Provider: React.FC = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>{children}</div>
    </>
  );
};

export default Provider;
