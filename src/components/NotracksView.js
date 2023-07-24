const NotracksView = props => {
  const {tracksList} = props

  return (
    <div className="main-container">
      <div className="poster-container">
        <div className="name-container">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
      </div>
      <div className="message-container">
        <p className="message">No Songs Found</p>
      </div>
    </div>
  )
}

export default NotracksView
