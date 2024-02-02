const InvoiceDetails = ({ id, parternid, partner, date, due, paid }) => {
  const formattedDate = due ? new Date(due).toLocaleDateString() : 'N/A';

  return (
    <div className="flex gap-9 border-b-2 py-3 bg-slate-50 hover:bg-slate-200">
      <div className="sm:w-[200px] flex-1 pl-2">{partner}</div>
      <div className="sm:w-[150px]">total</div>
      <div className="sm:w-[150px]">{formattedDate}</div>
      <div className="w-[80px]">
        {paid ? (
          <span className="text-green-900 font-bold">Paid</span>
        ) : (
          <span className="text-red-900 font-bold">Not paid</span>
        )}
      </div>
      <div className="w-[80px]">
        action
      </div>
    </div>
  )
}

export default InvoiceDetails