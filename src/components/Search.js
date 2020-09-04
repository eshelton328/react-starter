import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className='search-bar'>
        <input type='text' placeholder="Search.." onChange={
          (event) => {
            this.setState({
              input: event.target.value
            })
          }
        }/>
        <button onClick={() => {
          this.props.handleSearchInput(this.state.input);
          this.setState({
            input: ''
          })
        }}>
          Go
        </button>
      </div>
    );
  }

}

export default Search;