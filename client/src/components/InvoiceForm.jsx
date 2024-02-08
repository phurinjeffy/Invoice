import React, { useState } from "react";
import { useInvoiceContext } from "../hooks/useInvoiceContext";

const InvoiceForm = () => {
  const { dispatch } = useInvoiceContext();

  const [id, setId] = useState("");
  const [partner_id, setPartner_id] = useState("");
  const [date, setDate] = useState("");
  const [due, setDue] = useState("");
  const [paid, setPaid] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const invoice = { id, partner_id, date, due, paid };

    const response = await fetch("http://localhost:4000/api/invoices/", {
      method: "POST",
      body: JSON.stringify(invoice),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setId("");
      setPartner_id("");
      setDate("");
      setDue("");
      setPaid("");
      setError(null);
      console.log("new invoice added");
      dispatch({ type: "CREATE_INVOICE", payload: json });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="font-semibold text-base">Invoice details</div>

      <label>ID</label>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={id}
        className="border border-black border-opacity-50 rounded-xl py-2 px-4"
      />

      <label>Partner ID</label>
      <input
        type="text"
        onChange={(e) => setPartner_id(e.target.value)}
        value={partner_id}
        className="border border-black border-opacity-50 rounded-xl py-2 px-4"
      />

      <label>Date</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border border-black border-opacity-50 rounded-xl py-2 px-4"
      />

      <label>Due Date</label>
      <input
        type="date"
        onChange={(e) => setDue(e.target.value)}
        value={due}
        className="border border-black border-opacity-50 rounded-xl py-2 px-4"
      />

      <label>Status</label>
      <select
        onChange={(e) => setPaid(e.target.value)}
        value={paid}
        className="border border-black border-opacity-50 rounded-xl py-2 px-4"
      >
        <option value={true}>Paid</option>
        <option value={false}>Not Paid</option>
      </select>

      <button className="flex items-center justify-center p-3 bg-orange-400 rounded-xl text-white text-sm my-6">
        Add Invoice
      </button>

      {error && <div className="text-red-600 text-sm">{error}</div>}
    </form>
  );
};

export default InvoiceForm;
