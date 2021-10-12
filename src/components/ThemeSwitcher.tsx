import * as React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

const toggleDarkMode = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = React.useState(darkModeQuery.matches)

  React.useLayoutEffect(() => {
    darkModeQuery.addEventListener('change', (event) =>
      setDarkMode(event.matches)
    )

    // cleanup
    return darkModeQuery.removeEventListener('change', (event) =>
      setDarkMode(event.matches)
    )
  }, [])

  React.useLayoutEffect(() => {
    toggleDarkMode(darkMode)
  }, [darkMode])

  return (
    <button type="button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <SunIcon height={28} /> : <MoonIcon height={28} />}
    </button>
  )
}

export default ThemeSwitcher
