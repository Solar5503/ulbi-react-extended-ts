import { Button, Layout, Modal, Row } from 'antd'
import { useEffect, useState } from 'react'
import EventCalendar from '../components/Event/EventCalendar'
import EventForm from '../components/Event/EventForm'
import { useTypedActions, useTypedSelector } from '../hooks/redux'
import { IEvent } from '../models/IEvent'

const Event = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { fetchGuests, fetchEvents } = useTypedActions()
  const { guests, events } = useTypedSelector((state) => state.eventReducer)
  const { user } = useTypedSelector((state) => state.authReducer)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [fetchGuests, fetchEvents, user.username])

  const { createEvent } = useTypedActions()

  const addNewEvent = (event: IEvent) => {
    createEvent(event)
    setIsModalOpen(false)
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setIsModalOpen(true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add event"
        centered
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}

export default Event
