import React from "react";

const InvoiceForm = () => {
  const [partner_id, setPartner_id] = useState("");
  const [date, setDate] = useState("");
  const [due, setDue] = useState("");
  const [paid, setPaid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Invoice</h3>

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
      <input 
        type="date" 
        onChange={(e) => setDue(e.target.value)} 
        value={due} 
      />

      <label>paid: </label>
      <input
        type="text"
        onChange={(e) => setPaid(e.target.value)}
        value={paid}
      />
    </form>
  );
};

export default InvoiceForm;
