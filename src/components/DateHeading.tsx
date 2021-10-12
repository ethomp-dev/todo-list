import { MONTH, DAY } from '../lib/constants'

const DateHeading = () => {
  const today = new Date()

  return (
    <div>
      <p className="mb-1 uppercase text-sm text-gray-600 dark:text-gray-400">
        {DAY[today.getDay()]}
      </p>
      <p className="text-2xl font-semibold">
        {today.getDate()} {MONTH[today.getMonth()]}
      </p>
    </div>
  )
}

export default DateHeading
