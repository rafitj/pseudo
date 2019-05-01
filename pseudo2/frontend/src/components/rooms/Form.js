import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {addRoom} from '../../actions/rooms'
class Form extends React.Component{
  state = {
    title : '',
    summary: ''
  }

  onChange = e => {
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit = e => {
    e.preventDefault();
    const {title, summary } = this.state;
    const room = {title, summary};
    this.props.addRoom(room);
    this.setState({
      title: "",
      summary: ""
    });
  }
  render(){
    const {title, summary} = this.state;
    return (
      <div>
        <div className="card card-body mt-4 mb-4">
        <h2>Add Room</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Summary</label>
            <input
              className="form-control"
              type="text"
              name="summary"
              onChange={this.onChange}
              value={summary}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default connect(null, {addRoom})(Form);
