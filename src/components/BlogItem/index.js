import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = item

  return (
    <Link to={`blogs/${id}`} className="link">
      <div className="itemContainer">
        <img src={imageUrl} alt={title} className="itemImg" />
        <div className="ItemContent">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatarCard">
            <img src={avatarUrl} alt={author} className="avatarImg" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
