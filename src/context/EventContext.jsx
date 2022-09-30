import { createContext, useState } from "react"

export const EventContext = createContext({
  eventData: null,
  setEventData: () => null
})

// this is the component we'll use in our app that will allow any of its children to access the values of its useState 
export const EventProvider = ({children}) => {
  const [eventData, setEventData] = useState({
    eventName: "",
    hostName: "",
    startTime: "",
    endTime: "",
    date: "",
    location: "",
    eventPhoto: ""
  })
  const value = {eventData, setEventData}

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  )
}