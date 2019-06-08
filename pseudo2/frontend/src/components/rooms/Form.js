import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {addRoom,editRoom} from '../../actions/rooms'
import { Editor } from '@tinymce/tinymce-react';
import Carousel from 'react-bootstrap/Carousel'

class Form extends React.Component{
  state = {
    title : '',
    summary: '',
    content: '',
    security: 'Public',
    type: 'Question',
    tags: '',
    room_image: '',
    categories: ['O'],
    form_title: 'Create Room',
    form_submit: 'Create My Room!'
  }
  componentDidMount() {
    if(this.props.formMode === "edit"){
      this.setState({form_title: 'Edit Room', form_submit:'Update My Room!'});
    }
  }

  handleEditorChange = (e) => {
    this.setState({['content']: e.target.getContent()});
  }
  onChange = e => {
    this.setState({[e.target.name]:e.target.value});
  }
  onSelect = e =>{
    if (this.state.categories.includes(e.target.value)){
      this.setState({['categories']: this.state.categories.filter(category => category!==e.target.value)});
    }
    else {
      const new_categories = [...this.state.categories, e.target.value];
      this.setState({['categories']:[...this.state.categories, e.target.value]});
    }
  }
  getTypeClass = (value) => {
    return 'btn btn-secondary ' + ((value===this.state.type) ?'active':'');
  }
  getSettingClass = (value) => {
    return 'btn btn-secondary ' + ((value===this.state.security) ?'active':'');
  }
  getCategoryClass = (value) => {
    return 'btn btn-secondary ' + (this.state.categories.includes(value) ? 'active':'');
  }

  onSubmit = e => {
    e.preventDefault();
    const {title, summary, content, security, type, tags, categories} = this.state;
    const room = {title, summary, content, security, type, tags};
    if(this.props.formMode === "edit"){
      this.props.editRoom(room, this.props.match.params.roomId);
    }
    else {
      this.props.addRoom(room);
    }
    this.setState({
      title : '',
      summary: '',
      content: '',
      security: 'Public',
      type: 'Question',
      tags: '',
      categories: ['O']
    });
  }
  render(){
    const {title, summary, content, security, type, tags, categories, form_title, form_submit} = this.state;
    return (
      <div className = "center-container container">
        <div className=" create_room_form mt-5">
        <form onSubmit={this.onSubmit}>
        <div className = "form_container">
        <div className = "mb-3 create_room_header">{form_title}</div>
          <Carousel
            wrap = {false}
            interval = {null}
            >
            <Carousel.Item>
              <div className = "form_box">
                <p className = "mb-3 mt-3 instructions">
                  Welcome to Create Room. We'll guide you through the process.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className = "form_box">
                <div className="type_buttons btn-group-toggle" >
                  <label className = {this.getTypeClass("Question")}>
                    <input onClick = {this.onChange}  type="radio" value = "Question" name="type" id="option1"   />
                    <i className="fas fa-question"></i>
                    <span className = "type_text"> Question</span>
                  </label>
                  <label className = {this.getTypeClass("Advice")}>
                    <input onClick = {this.onChange}  type="radio" value = "Advice" name="type" id="option2"  />
                    <i className="fas fa-comment-dots"></i>
                      <span className = "type_text"> Advice</span>
                  </label>
                  <label className={this.getTypeClass("Discussion")}>
                    <input onClick = {this.onChange} type="radio" value = "Discussion" name="type" id="option3"  />
                    <i className="fas fa-comments"></i>
                      <span className = "type_text"> Discussion</span>
                  </label>
                </div>
                <p className = "mb-3 mt-3 instructions">
                  We would like to know what type of problem you're 
                  posting so its easier for others. Pick the most appropriate category.
                </p>
              </div>
            </Carousel.Item>
          
          <Carousel.Item>
            <div className = "form_box">
              <div className ="mt-2  form-group">
                <div className = "mb-1 room_sub_header">Title</div>
                <input
                  className="create_room_title form-control"
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={title}
                  placeholder= "Django REST Framework image serializers and viewsets"
                />
              </div>
              <p className = "mb-3 mt-3 instructions">
                    The title of your post gives creators an immediate indicator of your problem.
                    Try to be as succent as possible and pose your title as an open-ended question.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
           <div className = "form_box">
            <div className="form-group mt-2 ">
            <div className = "mb-1 room_sub_header">Summary</div>
              <input
                className="create_room_summary form-control"
                type="text"
                name="summary"
                onChange={this.onChange}
                value={summary}
                placeholder= "Does Django REST support image or URL serialization, if not how should I model images?"
              />
            </div>
            <p className = "mb-3 mt-3 instructions">
                  This summary is what other creators see first and is a place to summarize your problem 
                  and what sort of help your looking for along with other key details.
            </p>
           </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className = "form_box">
            <div className = "mb-1 room_sub_header">Content</div>
              <div className="create_room_content mt-2 form-group">
                <Editor
                    apiKey='lf30wew497dq0290pi8owi3u3pyodylcpi1vcl9zs1i8n3e1'
                    placeholder="I created an app where each user can create blog
                    posts with images, but I don't know how to serialize the image
                    data and use Django REST like I did with the text elements. Here's my
                    blog model and other serializers: "
                    init={{
                      height: 200,
                      plugins: [
                        'codesample advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                        'searchreplace wordcount visualblocks visualchars  wordcount fullscreen insertdatetime media nonbreaking',
                        'save table directionality emoticons template paste '
                      ],
                      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | codesample link image preview media fullpage | forecolor backcolor emoticons'
                    }}
                    name="content"
                    onChange={this.handleEditorChange}
                  />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className = "form_box">
              <div className="security_buttons btn-group btn-group-toggle">
                <label className={this.getSettingClass("Public")}>
                  <input onClick = {this.onChange} type="radio" name="security" value="Public" autoComplete="off"  />
                  <i className="fas fa-unlock"></i>
                  <br />
                  <span>Public</span>
                </label>
                <label className={this.getSettingClass("Protected")}>
                  <input onClick = {this.onChange} type="radio" name="security" value="Protected" autoComplete="off" />
                  <i className="fas fa-key"></i>
                    <br/>
                <span>Protected</span>
                </label>
                <label className={this.getSettingClass("Private")}>
                  <input onClick = {this.onChange} type="radio" name="security" value="Private" autoComplete="off" />
                  <i className="fas fa-lock"></i>
                  <br />
                  <span>Private</span>
                </label>
              </div>
              <p className = "mb-3 mt-3 instructions">
                  You can create problems that are open to the public, private drafts for yourself or protected posts 
                  for you to share with others yourself. 
            </p>
          </div>
          </Carousel.Item>

        <Carousel.Item>
           <div className = "form_box">
            <div className="room_categories ">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <label className={this.getCategoryClass("GS")}>
                      <input onClick = {this.onSelect}  type="checkbox" name="categories" value="GS"   /> General Software
                    </label>
                    <label className={this.getCategoryClass("CC")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="CC"  /> Code Challenges
                    </label>
                    <label className={this.getCategoryClass("D")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="D"  /> Design (UI/UX)
                    </label> <br/>
                  </div>
                  <div className="col-3">
                    <label className={this.getCategoryClass("WD")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="WD"   /> Web Dev
                    </label> <br/>
                  <label className={this.getCategoryClass("MD")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="MD"  /> Mobile Dev
                    </label> <br/>
                  <label className={this.getCategoryClass("GD")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="GD"  /> Game Dev
                    </label> <br/>
                  </div>
                  <div className="col-3">
                    <label className={this.getCategoryClass("IT")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="IT"   /> Tech & IT
                    </label> <br/>
                  <label className={this.getCategoryClass("AR")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="AR"  /> Art
                    </label> <br/>
                  <label className={this.getCategoryClass("C")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="C"  /> Casual
                    </label> <br/>
                  </div>
                  <div className="col-3">

                    <label className={this.getCategoryClass("AC")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="AC"   /> Academic
                    </label> <br/>
                  <label className={this.getCategoryClass("O")}>
                      <input onClick = {this.onSelect} type="checkbox" name="categories" value="O"  /> Other
                    </label> <br/>
                  </div>
                </div>
              </div>
            </div>
            <p className = "mb-3 mt-3 instructions">
                 Choose as many valid categories as you think apply to your problem to help us collect data and others find your post.
            </p>
          </div>
          </Carousel.Item>

          <Carousel.Item>
           <div className = "form_box">
            <div className="mt-2 form-group">
            <div className = "mb-1 room_sub_header">Tags</div>
              <input
                className="form-control"
                type="text"
                name="tags"
                onChange={this.onChange}
                value={tags}
                placeholder= "Python, Django, Babel 7 ..."
              />
            </div>
            <p className = "mb-3 mt-3 instructions">
              You can add extra, optional tags to again help direct users to your post. You can be as picky as you want here!
            </p>
          </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className = "form_box">
              <p className = "mb-3 mt-3 instructions">
                Pseudo has rules relating to creating and working with posts. Please read our terms of service and post conditions for more details.
                You must agree to these conditions to post.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className = "form_box">
              <p className = "mb-3 mt-3 instructions">
                Please carefully review all details related to your post before posting. You can always come back and edit content later.
              </p>
              <div className="form-group">
                <button type="submit" className="create_room_submit">
                  {form_submit}
                </button>
              </div>
            </div>
          </Carousel.Item>


          </Carousel>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default connect(null, {addRoom,editRoom})(Form);
