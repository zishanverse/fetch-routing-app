import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo/index'
import BlogList from '../BlogList/index'
import './index.css'

class Home extends Component {
  state = {loader: true, list: []}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateList = data.map(each => this.convertCase(each))

    this.setState({list: updateList, loader: false})
  }

  convertCase = data => ({
    id: data.id,
    author: data.author,
    avatarUrl: data.avatar_url,
    imageUrl: data.image_url,
    title: data.title,
    topic: data.topic,
  })

  render() {
    const {loader, list} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {loader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList list={list} />
        )}
      </div>
    )
  }
}

export default Home
