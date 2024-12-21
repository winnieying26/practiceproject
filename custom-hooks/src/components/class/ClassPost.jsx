import React from "react";
export default class ClassPost extends React.Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    if (this.state.loading) return <div>Loading</div>;
    return (
      <div>
        <h1>Posts</h1>
        <div>
            {this.state.posts.map((post)=>{
                const {id, title} = post;
                return <div key={id}>{title}</div>
            })}
        </div>
      </div>
    );
  }
}
