using System;
using System.Collections.Generic;

namespace EventManagementSystem.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }
        public List<Attendee> Attendees { get; set; }
    }
}
