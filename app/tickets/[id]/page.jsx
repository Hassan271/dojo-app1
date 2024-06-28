// Function to get id  -----------
async function getTicket(id) {   
  //  fetch Data ===========================
    const response = await fetch("http://localhost:4000/tickets/" + id, 
      {
  // fetch and Refresh data after every 0 seconds ie consistently Refresh data   no Data store in cashe 
      next: { revalidate: 60 }, 
    })
    return response.json()
}
    
export default async function TicketDetails({ params }) {
    // get ticket if from browser input data -------------------
    const ticket = await getTicket(params.id)

    return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">

        <h3>{ticket.title}</h3>
        
        <small>Created by {ticket.user_email}</small>
        
        <p>{ticket.body}</p>
        {/* priority may be Low, Medium or High ------------------ */}
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
    
  )
}
