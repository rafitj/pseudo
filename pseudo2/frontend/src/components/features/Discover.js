import React, {Fragment} from 'react';
import Rooms from '../rooms/Rooms';
import Search from '../common/Search';

class Discover extends React.Component{

  render(){
    return (
      <Fragment>
        <Search placeholder="Discover New Rooms ..."/>
        <Rooms />
      </Fragment>
    );
  }
}

export default Discover;
