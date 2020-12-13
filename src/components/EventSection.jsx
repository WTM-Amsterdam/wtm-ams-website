import React from 'react'
import eventData from '../data/events.json'

const EventSection = () => {
  return (
    <section id='events'>
      <div className='container'>
        <h1 className='header-dark'>Events</h1>
        {eventData.map(({
                          title, day,
                          weekDay,
                          year,
                          month,
                          timeslot, location
                        }) => (
          <div key={title} className="row row-striped">
            <div className="col-2 text-center">
              <h1 className="display-4"><span
                className="badge badge-secondary">{day}</span></h1>
              <h2>{month}</h2>
              <small>{year}</small>
            </div>
            <div className="col-10">
              <h3 className="text-uppercase"><strong>{title}</strong></h3>
              <ul className="list-inline">
                <li className="list-inline-item"><i className="fa fa-calendar-o"
                                                    aria-hidden="true"></i> {weekDay}
                </li>
                <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i>
                  {timeslot}
                </li>
                <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> {location}
                </li>
              </ul>
              <p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventSection
