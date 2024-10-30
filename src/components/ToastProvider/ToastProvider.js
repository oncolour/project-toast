import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  closeAllToasts: () => {},
});

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    closeAllToasts();
  });

  const addToast = (message, variant) => {
    if (!message) return;

    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message: message, variant: variant },
    ]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const closeAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, closeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
