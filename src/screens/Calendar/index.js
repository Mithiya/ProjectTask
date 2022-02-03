import React, {Component} from 'react'

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calender.css'
const localizer = momentLocalizer(moment);
class calendar extends Component {
    constructor (props){

        super(props)
       
    }
    render(){
        return(
            <div className='`rbc-timeslot-group ${classes}`'>
                 <Calendar
      localizer={localizer}
    //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
            </div>
        )
    }
}

export default calendar