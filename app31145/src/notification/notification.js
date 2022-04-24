import {useContext,createContext,useState,} from 'react';
import './notification.css'

const Notification = ({message,severity}) => {
    
    if(message === '') {
        return null
    }

    const config = true ?
    {
        className: `${severity === 'success' ? 'success' : 'error'}`
    } : {}

    return (
        <div {...config}>
            { message }
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity,setSeverity] = useState('success')

    const setNotification = (sev,msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(()=>{
            setMessage('')
        }, 2000)
    }
    return(
        <NotificationContext.Provider value={{ setNotification}}> 
            <Notification message={message} severity={severity}>
                {children}
            </Notification>

        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}