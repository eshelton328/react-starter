import React from 'react'

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className='add-bar'>
        <input type='text' placeholder='Add movie title here' onChange={
          (event) => {
            var movie = {title: event.target.value};

            this.setState({
              input: movie
            })
          }
        }/>
        <button onClick={() => this.props.handleAddInput(this.state.input)}>
          Add
        </button>
      </div>
    )
  }
}

export default AddMovie;