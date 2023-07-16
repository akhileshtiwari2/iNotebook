import React from "react";

function Alert(props) {
  const capitalizeFirstLowercaseRest = (str) => {
    if (str === "danger") {
      str = "error";
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          // className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {capitalizeFirstLowercaseRest(props.alert.type)} : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
