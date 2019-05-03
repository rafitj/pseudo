import React, {Fragment} from 'react';

class Search extends React.Component{
  state = {
    search: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render(){
    const { search } = this.state;
    return (
      <Fragment>
        <div className = "discover_search">
            <div className="Search is-Search-open" data-search>
              <form onSubmit = {this.onSubmit} action="">
              <label htmlFor="Search">
                  <i className="fas  fa-2x fa-search"></i>
              </label>
              <input onChange = {this.onChange} name ="search" value = {search} placeholder={this.props.placeholder} id="Search" className=" Search-input" data-search-input />
              <button data-search-control aria-label="Clear search"><i className="fas fa-2x fa-times"></i></button>
              </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Search;
