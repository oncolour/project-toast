import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");

  const onSubmit = (message, variant) => {
    addToast(message, variant);
    setMessage("");
    setVariant("notice");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(message, variant);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantName) => (
              <label htmlFor={`variant-${variantName}`} key={variantName}>
                <input
                  id={`variant-${variantName}`}
                  type="radio"
                  name="variant"
                  value={variantName}
                  onChange={() => setVariant(variantName)}
                  checked={variant === variantName}
                />
                {variantName}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
