import * as React from 'react'
import { MONTH, DAY } from '../lib/constants'

const DateHeading = () => {
  const [now, setNow] = React.useState(new Date())

  React.useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div>
        <p className="mb-1 uppercase text-sm text-gray-600 dark:text-gray-400">
          {DAY[now.getDay()]}
        </p>
        <p className="text-2xl font-semibold">
          {now.getDate()} {MONTH[now.getMonth()]}
        </p>
      </div>

      <p className="text-2xl font-semibold">
        {now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </>
  )
}

export default DateHeading
