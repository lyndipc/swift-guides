import { createContext, useContext, useState } from 'react'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => {
      setToast(null)
    }, 7000)
  }

  return <ToastContext.Provider value={{ showToast, toast }}>{children}</ToastContext.Provider>
}

export function useToast() {
  return useContext(ToastContext)
}
