import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {detail: [], loader: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updateData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({detail: updateData, loader: false})
  }

  getRender = () => {
    const {detail} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = detail

    return (
      <div className="detail-container">
        <h1 className="heading">{title}</h1>
        <div className="authorDetailCard">
          <img src={avatarUrl} alt={author} className="avatarImg" />
          <p className="authorName">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="imageDetailCard" />
        <p className="details">{content}</p>
      </div>
    )
  }

  render() {
    const {loader} = this.state

    return (
      <div className="detailsCard">
        {loader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.getRender()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
