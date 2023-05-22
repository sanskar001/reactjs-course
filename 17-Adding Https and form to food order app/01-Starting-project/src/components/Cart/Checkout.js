import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;

const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsvalid = !isEmpty(enteredName);
    const streetIsvalid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveChars(enteredPostal);
    const cityIsvalid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: nameIsvalid,
      street: streetIsvalid,
      postalCode: postalIsValid,
      city: cityIsvalid,
    });

    const formIsValid =
      nameIsvalid && streetIsvalid && postalIsValid && cityIsvalid;

    if (!formIsValid) {
      return;
    }

    // Submit Cart data
    props.onConfirm({
      name: enteredName.trim(),
      street: enteredStreet.trim(),
      postalCode: enteredPostal.trim(),
      city: enteredCity.trim(),
    });
  };

  const nameControlClasses = `${classes.control} ${
    !formInputValidity.name ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.control} ${
    !formInputValidity.street ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    !formInputValidity.postalCode ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    !formInputValidity.city ? classes.invalid : ""
  }`;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter valid postal code.</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
