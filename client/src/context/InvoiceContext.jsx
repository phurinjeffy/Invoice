import { createContext, useReducer } from "react";

export const InvoiceContext = createContext();

export const invoiceReducer = (state, action) => {
  switch (action.type) {
    case "SET_INVOICE":
      return {
        invoices: action.payload,
      };
    case "CREATE_INVOICE":
      return {
        invoices: [action.payload, ...state.invoices],
      };
    case "DELETE_INVOICE":
      return {
        invoices: state.invoices.filter((i) => i._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const InvoiceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, {
    invoices: null,
  });

  return (
    <InvoiceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};
