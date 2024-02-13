import React from "react";

function FullPageSpinner() {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="flex items-center justify-center animate-spin w-10 h-10 text-3xl mx-auto">
        <i className="fi fi-br-spinner  flex "></i>
      </span>
    </div>
  );
}

export default FullPageSpinner;
