import React, {Fragment} from 'react';
import Form from './Form';
import Rooms from './Rooms';

export default function Dashboard(){
  return (
    <Fragment>
      <Form />
      <Rooms />
    </Fragment>
  );
}
