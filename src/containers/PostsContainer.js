import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { PostList, Icon, Spinner } from '../components'
import { meta } from '../helpers'
import { fetchPosts, filterPosts, nextPage } from '../actions/post'
import { HistoryFilterContainer } from './'

class PostsContainer extends Component {
  componentDidMount() {
    meta.setSubTitle('Posts')
    if (this.props.post.posts.length == 0) {
      this.props.fetchPosts()
    }
  }
  getLoader() {
    if (this.props.post.fetch_posts) {
      return <p>Carregando...</p>
    }
  }
  searchPosts(e) {
    if (e) e.preventDefault()
    const current_filter = this.props.post.filter
    const filter = this.refs.filter.value
    if (filter.length >= 2) {
      if (current_filter != filter) {
        this.refs.filter.select()
        this.props.filterPosts(filter)
      }
    } else {
      this.refs.filter.placeholder = 'Mínimo de 2 caracteres'
      this.refs.filter.focus()
      setTimeout(() => {
        this.refs.filter.placeholder = 'Pesquise'
      }, 1300)
    }
  }
  loadMore(e) {
    e.preventDefault()
    this.props.nextPage()
  }
  render() {
    const { post } = this.props
    const loadMoreClassname = classnames({
      'btn': true,
      'btn-info': true,
      'disabled': post.fetch_posts
    })
    return(
      <div className="container-fluid">
        <header className="page-header text-center">
          <h1>Posts</h1>
        </header>
        <section className="post-list-section">
          <div className="panel panel-default">
            <div className="panel-body panel-body-large relative">
              <Spinner absolute show={this.props.post.fetch_posts} />
              <form className="form-filter-post" onSubmit={this.searchPosts.bind(this)}>
                <div className="form-group">
                  <input type="text" ref="filter" placeholder="Pesquise" className="form-control"/>
                </div>
                <button><Icon name="search" /></button>
              </form>
              <HistoryFilterContainer input={this.refs.filter} />
              <PostList posts={post.posts} />
              <div className="load-more-box">
                <a href="#" onClick={this.loadMore.bind(this)} className={loadMoreClassname}>Carregar mais</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (page = 1) => {
      dispatch(fetchPosts(page))
    },
    filterPosts: (filter) => {
      dispatch(filterPosts(filter))
    },
    nextPage: () => {
      dispatch(nextPage())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
