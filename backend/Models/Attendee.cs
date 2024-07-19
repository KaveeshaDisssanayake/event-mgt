namespace EventManagementSystem.Models
{
    public class Attendee
    {
        public int AttendeeId { get; set; }
        public int EventId { get; set; }
        public string Name { get; set; }
        public Event Event { get; set; }
    }
}
