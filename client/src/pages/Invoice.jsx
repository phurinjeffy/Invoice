import React from "react";
import { useEffect } from "react";
import InvoiceDetails from "../components/InvoiceDetails";
import { Link } from "react-router-dom";
import { useInvoiceContext } from "../hooks/useInvoiceContext";

const Invoice = () => {
  const { invoices, dispatch } = useInvoiceContext();

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await fetch("http://localhost:4000/api/invoices/");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_INVOICE', payload: json})
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="m-6">
      <div className="text-xl font-semibold">
        Invoices List
      </div>

      <div className="flex flex-row my-6">
        <Link
          to="../new-invoice"
          className="flex items-center justify-center p-3 bg-orange-400 rounded-xl text-white text-sm hover:scale-105 duration-500"
        >
          Add Invoice
        </Link>
      </div>

      <div className="flex gap-9 bg-slate-600 py-3 rounded-tl-lg rounded-tr-lg">
        <div className="font-semibold w-[200px] flex-1 pl-4 text-white">
          Partner
        </div>
        <div className="font-semibold w-[150px] text-white">Total</div>
        <div className="font-semibold w-[150px] text-white">Date</div>
        <div className="font-semibold w-[80px] text-white">Status</div>
        <div className="font-semibold w-[80px] text-white">Action</div>
      </div>

      {invoices &&
        invoices.map((invoice) => (
          <InvoiceDetails
            key={invoice._id}
            id={invoice._id}
            partner_id={invoice.partner_id}
            date={invoice.date}
            due={invoice.due}
            paid={invoice.paid}
          />
        ))}
    </div>
  );
};

export default Invoice;
