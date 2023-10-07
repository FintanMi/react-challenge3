import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchInput'>
                            Search:
                        </label>
                        <input
                            onChange={(event) => this.handleChange(event)}
                            type='search'
                            id='searchInput'
                            placeholder='by author'
                        />
                        <h4>
                            posts found {this.state.posts.length}
                        </h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content