import React from "react";
import { useEffect, useState } from "react";
import InvoiceDetails from "../components/InvoiceDetails";

const Invoice = () => {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      const response = await fetch("http://localhost:4000/api/invoices/");
      const json = await response.json();

      if (response.ok) {
        setInvoices(json);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div className="m-6">
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
            partnerid={invoice.partnerid}
            partner={invoice.partner}
            date={invoice.date}
            due={invoice.due}
            paid={invoice.paid}
          />
        ))}
    </div>
  );
};

export default Invoice;
