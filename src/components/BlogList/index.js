import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {list} = props
  console.log(list)

  return (
    <ul className="blogList">
      {list.map(each => (
        <BlogItem key={each.id} item={each} />
      ))}
    </ul>
  )
}

export default BlogList
