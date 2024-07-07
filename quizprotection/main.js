// Define a ticket class
class Ticket {
  constructor(id, title, description, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status; // 'open', 'closed'
  }
}

// Define a ticketing system class
class TicketingSystem {
  constructor() {
    this.tickets = [];
    this.nextId = 1;
  }

  createTicket(title, description) {
    let newTicket = new Ticket(this.nextId, title, description, "open");
    this.tickets.push(newTicket);
    this.nextId++;
    return newTicket;
  }

  closeTicket(id) {
    let ticket = this.tickets.find((ticket) => ticket.id === id);
    if (ticket) {
      ticket.status = "closed";
    }
  }

  listTickets() {
    return this.tickets;
  }
}

// Create a new ticketing system
let ticketingSystem = new TicketingSystem();

// Add some tickets
ticketingSystem.createTicket("Broken printer", "The office printer is broken.");
ticketingSystem.createTicket("WiFi down", "The WiFi is not working.");

// List all tickets
console.log(ticketingSystem.listTickets());

// Close a ticket
ticketingSystem.closeTicket(1);

// List all tickets
console.log(ticketingSystem.listTickets());
