import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class CommentItem extends Component {
  render() {
    const {item, deleteComments, updateLike} = this.props
    const {yourName, comments, id, isTrue, date, colors} = item

    const likeClick = () => {
      updateLike(id)
    }

    const deleteBtn = () => {
      deleteComments(id)
    }

    const imageElement = isTrue
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

    const dateString = formatDistanceToNow(date)
    return (
      <li className="comment-container">
        <div className="comments-item">
          <div className="section">
            <div className="profile">
              <p className={colors}>{yourName ? yourName.slice(0, 1) : ''}</p>
            </div>
            <div className="text-container">
              <p className="name">
                {yourName} <span className="date">{dateString} ago</span>
              </p>
              <p className="comments">{comments}</p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <div className="like-container">
            <img src={imageElement} alt="like" />
            <button type="button" className="icon-btn" onClick={likeClick}>
              Like
            </button>
          </div>
          <button
            className="icon-btn"
            // eslint-disable-next-line react/no-unknown-property
            testId="delete"
            type="button"
            onClick={deleteBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default CommentItem
