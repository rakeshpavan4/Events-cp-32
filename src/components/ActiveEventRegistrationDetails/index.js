// Write your code here
// import {Component} from 'react'
import './index.css'

const registrationStatus = {
  yettoregister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registractionsclosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistractionStatus} = props

  const renderyettoregister = () => (
    <div className="yettoregister">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
        className="registrationclosedImage"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderregistered = () => (
    <div className="yettoregister">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registrationclosedImage"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderregistractionsclosed = () => (
    <div className="yettoregister">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="registrationclosedImage"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const renderNoActiveEventView = () => (
    <div className="yettoregister">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const getrenderregistractionstatus = () => {
    switch (activeEventRegistractionStatus) {
      case registrationStatus.yettoregister:
        return renderyettoregister()
      case registrationStatus.registered:
        return renderregistered()
      case registrationStatus.registractionsclosed:
        return renderregistractionsclosed()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <>
      <div>{getrenderregistractionstatus()}</div>
    </>
  )
}

export default ActiveEventRegistrationDetails
