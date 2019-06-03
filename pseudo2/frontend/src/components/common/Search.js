import React, {Fragment} from 'react';

class Search extends React.Component{

  render(){
    return (
      <Fragment>
        <div className = "discover_search"  data-aos="fade" data-aos-duration = "1000" >
            <div className="Search is-Search-open" data-search>
              <form onSubmit = {this.props.onSubmit} action="">
              <label htmlFor="Search">
                  <i className="fas  fa-2x fa-search"></i>
              </label>
              <input onChange = {this.props.onChange} name ="search" value = {this.props.search} placeholder={this.props.placeholder} id="Search" className=" Search-input" data-search-input />
              <button data-search-control aria-label="Clear search"><i className="fas fa-2x fa-times"></i></button>
              </form>
          </div>
        </div>
      </Fragment>
    );
  }
} 

export default Search;
