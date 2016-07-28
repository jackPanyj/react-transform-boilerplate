import React, {Component} from 'react';
import urls from '../tools/urls'
import marked from 'marked'
class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    fetch(`${urls.issues}/${this.props.routeParams.id}/comments`)
      .then(res => res.json())
      .then(comment => this.setState({comment}) )
  }
  render () {
    const html = marked(this.state.comment[0].body)
    return (
      <div dangerouslySetInnerHTML = {{__html: html}}></div>
    )
  }
}
export default BlogDetail
