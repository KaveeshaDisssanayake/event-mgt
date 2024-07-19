using Microsoft.AspNetCore.Mvc;
using EventManagementSystem.Data;
using EventManagementSystem.Models;

namespace EventManagementSystem.Controllers
{
    [ApiController]
    [Route("api/events/{eventId}/[controller]")]
    public class AttendeesController : ControllerBase
    {
        private readonly EventContext _context;

        public AttendeesController(EventContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Attendee>> RegisterAttendee(int eventId, Attendee newAttendee)
        {
            var eventItem = await _context.Events.FindAsync(eventId);
            if (eventItem == null)
            {
                return NotFound();
            }
            newAttendee.EventId = eventId;
            _context.Attendees.Add(newAttendee);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAttendee), new { eventId, id = newAttendee.AttendeeId }, newAttendee);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Attendee>> GetAttendee(int eventId, int id)
        {
            var attendee = await _context.Attendees.FirstOrDefaultAsync(a => a.EventId == eventId && a.AttendeeId == id);
            if (attendee == null)
            {
                return NotFound();
            }
            return attendee;
        }
    }
}
