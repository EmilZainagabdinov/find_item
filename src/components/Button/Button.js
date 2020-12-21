import React from 'react';

const Button = props => {
  let action = null;
  const buttonClasses = ["ActionButton"];

  if (props.action === "Start") {
    action = () => {
      props.createFieldUnits();
      props.showField();
    };
    buttonClasses.push("ActionButton_start");

  } else if (props.action === "Reset") {
    action = () => {
      props.createFieldUnits();
    };
    buttonClasses.push("ActionButton_reset");
  }

  return (
      <>
        <Button
            className={buttonClasses.join(" ")}
            onClick={action}>
          {props.action}
        </Button>
      </>
  );
};

export default Button;