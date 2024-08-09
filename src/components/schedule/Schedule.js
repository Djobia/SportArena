import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Schedule.css";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid"; // To generate unique IDs

const localizer = momentLocalizer(moment);

const currentUserId = 1; // Replace this with the actual current user's ID

const initialEvents = [
  {
    id: uuidv4(),
    title: "Ismael School pickup",
    start: new Date(2024, 6, 30, 13, 30),
    end: new Date(2024, 6, 30, 14, 30),
    userId: 1,
  },
  {
    id: uuidv4(),
    title: "Ismael School pickup",
    start: new Date(2024, 6, 31, 13, 30),
    end: new Date(2024, 6, 31, 14, 30),
    userId: 1,
  },
  {
    id: uuidv4(),
    title: "Ismael School pickup",
    start: new Date(2024, 7, 1, 13, 30),
    end: new Date(2024, 7, 1, 14, 30),
    userId: 1,
  },
  {
    id: uuidv4(),
    title: "Ismael School pickup",
    start: new Date(2024, 7, 2, 13, 30),
    end: new Date(2024, 7, 2, 14, 30),
    userId: 1,
  },
  {
    id: uuidv4(),
    title: "Ismael School pickup",
    start: new Date(2024, 7, 3, 13, 30),
    end: new Date(2024, 7, 3, 14, 30),
    userId: 1,
  },
];

const Schedule = () => {
  const [events, setEvents] = useState(initialEvents);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    userId: currentUserId,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    const now = new Date();
    if (start < now) {
      alert("You cannot select a past date or time.");
      return;
    }
    // Ensure end time is on the same day as start time
    if (moment(end).isAfter(moment(start).endOf("day"))) {
      end = moment(start).endOf("day").toDate();
    }
    setNewEvent({ ...newEvent, start, end });
    setSelectedDate(start);
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    // Ensure the event end time is not before start time
    if (newEvent.end <= newEvent.start) {
      alert("End time must be after start time");
      return;
    }
    setEvents([...events, { ...newEvent, id: uuidv4() }]);
    setModalIsOpen(false);
  };

  const handleDeleteEvent = (event) => {
    if (event.userId === currentUserId) {
      setEvents(events.filter((e) => e.id !== event.id));
    } else {
      alert("You cannot delete this event.");
    }
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.userId === currentUserId ? "#1a73e8" : "#6c757d",
      color: "white",
      borderRadius: "0px",
      border: "none",
      display: "block",
    };
    return {
      style: style,
    };
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className="schedule-container">
      <button onClick={() => setModalIsOpen(true)}>Select Time</button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }}
        step={30}
        timeslots={1}
        defaultView="week"
        views={["week"]}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleDeleteEvent}
        eventPropGetter={eventStyleGetter}
        min={new Date(2024, 0, 1, 7, 0)}
        max={new Date(2024, 0, 1, 23, 59)}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Event"
      >
        <h2>Add Event</h2>
        <p>Date: {moment(selectedDate).format("MMMM D, YYYY")}</p>
        <form>
          <label>
            Event Title:
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Start Time:
            <DatePicker
              selected={newEvent.start}
              onChange={(date) => setNewEvent({ ...newEvent, start: date })}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="datepicker"
              filterTime={filterPassedTime}
              minDate={new Date()}
            />
          </label>
          <br />
          <label>
            End Time:
            <DatePicker
              selected={newEvent.end}
              onChange={(date) => setNewEvent({ ...newEvent, end: date })}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="datepicker"
              filterTime={filterPassedTime}
              minDate={newEvent.start}
            />
          </label>
          <br />
          <button type="button" onClick={handleAddEvent}>
            Add Event
          </button>
          <button type="button" onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Schedule;
