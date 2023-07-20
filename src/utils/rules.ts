import daysjs, { Dayjs } from 'dayjs'
export const rules = {
  required: (message = 'Required field!') => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: unknown, value: Dayjs) {
      if (
        daysjs().isBefore(daysjs(value)) ||
        daysjs().isSame(daysjs(value), 'day')
      )
        return Promise.resolve()
      return Promise.reject(new Error(message))
    },
  }),
}
