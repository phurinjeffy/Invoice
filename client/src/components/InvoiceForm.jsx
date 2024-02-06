import React, { useState } from "react";

const InvoiceForm = () => {
  const [id, setId] = useState("");
  const [partner_id, setPartner_id] = useState("");
  const [date, setDate] = useState("");
  const [due, setDue] = useState("");
  const [paid, setPaid] = useState("");
  const [error, setError] = useState("null");

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
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Invoice</h3>

      <label>id: </label>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />

      <label>partner_id: </label>
      <input
        type="text"
        onChange={(e) => setPartner_id(e.target.value)}
        value={partner_id}
      />

      <label>date: </label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <label>due: </label>
      <input type="date" onChange={(e) => setDue(e.target.value)} value={due} />

      <label>paid: </label>
      <input
        type="text"
        onChange={(e) => setPaid(e.target.value)}
        value={paid}
      />

      <button>Add Invoice</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default InvoiceForm;
