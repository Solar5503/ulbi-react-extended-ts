import type { Dayjs } from 'dayjs'
export const rules = {
  required: (message = 'Required field!') => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: unknown, value: Dayjs) {
      const now = new Date().toLocaleDateString()
      const dateEvent = value?.format('DD.MM.YYYY')

      if (now <= dateEvent) return Promise.resolve()
      return Promise.reject(new Error(message))
    },
  }),
}
