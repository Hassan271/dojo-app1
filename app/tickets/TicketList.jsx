import Link from "next/link";

// Function to get data List -----------
async function getTickets() {
  // Apply Delay 
  await new Promise((resolve) => setTimeout(resolve, 3000));

//  fetch Data ===========================
  const response = await fetch("http://localhost:4000/tickets", 
    {
// fetch and Refresh data after every 0 seconds ie consistently Refresh data   no Data store in cashe 
    next: { revalidate: 0 }, 
  });

//   return Data ===========================
  const data = await response.json();
  return data;
}

export default async function TicketList() {
  
    // call getTickets Function ----------------------------------
    const tickets = await getTickets();
  
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">

          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            
            {/* priority Low, Medium, High -------------------------- */}
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>

        </div>
      ))}

      {/* if no ticket ------------- */}
      {tickets.length === 0 && (
        <p className="text-center">No Tickets found!</p>
      )}
    </>
  );
}