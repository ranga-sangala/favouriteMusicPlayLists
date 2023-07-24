import {AiOutlineDelete} from 'react-icons/ai'

const Tracks = props => {
  const {track, id, deleteTrack} = props

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <div className="track-details">
      <div className="left-section">
        <img className="song-image" src={track.imageUrl} alt="track" />
        <ul className="song-details">
          <p className="song-name">{track.name}</p>
          <p className="song-genre">{track.genre}</p>
        </ul>
      </div>
      <div className="right-section">
        <p className="song-duration">{track.duration}</p>
        <button type="submit" data-testid="delete" onClick={onDeleteTrack}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}

export default Tracks
