import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { IEvent } from '../../models/IEvent'
import { IUser } from '../../models/IUser'
import { rules } from '../../utils/rules'

interface IEventFormProps {
  guests: IUser[]
  submit: (event: IEvent) => void
}

const EventForm = ({ guests, submit }: IEventFormProps) => {
  const { error, isLoadingEvent, isLoadingGuests } = useTypedSelector(
    (state) => state.eventReducer
  )
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  })
  const { user } = useTypedSelector((state) => state.authReducer)

  const submitHandler = () => submit({ ...event, author: user.username })

  return (
    <Form onFinish={submitHandler}>
      <Form.Item
        label="Description of the event"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEvent((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </Form.Item>
      <Form.Item
        label="Date of the event"
        name="date"
        rules={[
          rules.required(),
          rules.isDateAfter(`Can't create an event in the past`),
        ]}
      >
        <DatePicker
          onChange={(_, dateString) =>
            setEvent((prev) => ({
              ...prev,
              date: dateString,
            }))
          }
        />
      </Form.Item>
      <Form.Item label="Select a guest" name="guest" rules={[rules.required()]}>
        <Select
          loading={isLoadingGuests}
          onChange={(guest: string) => {
            setEvent((prev) => ({ ...prev, guest }))
          }}
          options={guests.map((guest) => ({
            value: guest.username,
            label: guest.username,
          }))}
        />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoadingEvent}>
            Create
          </Button>
        </Form.Item>
      </Row>
      {error && (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      )}
    </Form>
  )
}

export default EventForm
