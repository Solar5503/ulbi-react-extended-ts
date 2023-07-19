import { Calendar } from 'antd'
import type { Dayjs } from 'dayjs'
import { IEvent } from '../../models/IEvent'

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar = ({ events }: EventCalendarProps) => {
  const dateCellRender = (value: Dayjs) => {
    const currentDayEvents = events.filter(
      (event) => event.date === value.format('YYYY-MM-DD')
    )

    return (
      <div>
        {currentDayEvents.map((event, idx) => (
          <div key={idx}>{event.description}</div>
        ))}
      </div>
    )
  }
  return <Calendar cellRender={dateCellRender} />
}

export default EventCalendar
