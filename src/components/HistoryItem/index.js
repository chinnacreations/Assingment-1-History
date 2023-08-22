import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const clickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-con">
      <div className="con">
        <div className="row">
          <p className="desc">{timeAccessed}</p>
          <img className="image" alt="domain logo" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        className="btn"
        type="button"
        data-testid="delete"
        onClick={clickDelete}
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
