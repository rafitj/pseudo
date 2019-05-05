import React, {Fragment} from 'react';
import Rooms from '../rooms/Rooms';
import Search from '../common/Search';

class Discover extends React.Component{
  state = {
    search: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render(){
    const { search } = this.state;
    return (
      <Fragment>
        <Search search = {search} onSubmit = {this.onSubmit} onChange = {this.onChange} placeholder="Discover New Rooms ..."/>
        <Rooms query={search} />
      </Fragment>
    );
  }
}

export default Discover;
