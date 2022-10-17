import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {yourName: '', comments: '', data: []}

  onNameChange = event => {
    this.setState({yourName: event.target.value})
  }

  onCommentsChange = event => {
    this.setState({comments: event.target.value})
  }

  updateLike = id => {
    this.setState(prevState => ({
      data: prevState.data.map(item => {
        if (item.id === id) {
          return {...item, isTrue: !item.isTrue}
        }
        return item
      }),
    }))
  }

  deleteComments = id => {
    const {data} = this.state
    const deleteId = data.filter(item => item.id !== id)
    this.setState({data: deleteId})
  }

  addComments = event => {
    event.preventDefault()
    const {yourName, comments} = this.state
    const differentColors = `profile-text ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    if (yourName !== '' && comments !== '') {
      const newCommentsList = {
        id: uuidv4(),
        yourName,
        comments,
        date: new Date(),
        isTrue: false,
        colors: differentColors,
      }
      this.setState(prevState => ({
        data: [...prevState.data, newCommentsList],
        yourName: '',
        comments: '',
      }))
    }
  }

  render() {
    const {data, yourName, comments} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <div className="form-container">
            <form className="form" onSubmit={this.addComments}>
              <p className="text">Say something about 4.0 technologies</p>

              <input
                type="text"
                placeholder="Your Name"
                className="input"
                value={yourName}
                onChange={this.onNameChange}
              />
              <textarea
                placeholder="Your Comment"
                value={comments}
                rows="6"
                className="input textarea"
                onChange={this.onCommentsChange}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              className="img"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p>
            <span className="count">{data.length}</span> Comments
          </p>

          <ul className="comment-list">
            {data.map(item => (
              <CommentItem
                key={item.id}
                item={item}
                deleteComments={this.deleteComments}
                updateLike={this.updateLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
