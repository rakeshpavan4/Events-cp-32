// Write your code here
import './index.css'

const EventItem = props => {
  const {details, setactiveId} = props
  const {name, location, imageUrl, id} = details
  const onClickEvent = () => {
    setactiveId(id)
  }

  return (
    <li className="event-card">
      <button type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-image"
          onClick={onClickEvent}
        />
      </button>
      <p className="para">{name}</p>
      <p className="para">{location}</p>
    </li>
  )
}

export default EventItem
