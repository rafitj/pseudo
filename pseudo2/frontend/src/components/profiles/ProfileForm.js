import React from 'react';
import {connect} from 'react-redux';
import {fetchProfile} from '../../actions/curr_profile'
import {editProfile} from '../../actions/profiles'

class ProfileForm extends React.Component{
  state = {
    bio : '',
    title : '',
    github : '',
    website : '',
    hire : true,
    profile_image: null,
    skills:''
  }

  componentDidMount() {
    const {bio, title, github, website, hire, profile_image, skills} = this.props.profile;
    this.setState({
      title,
      bio,
      github,
      website,
      profile_image,
      hire,
      skills
    });
  }
  onChange = e => {
    const x = e.target.name
    this.setState({[e.target.name]:e.target.value});
  }
  onToggle = e => {
    if (e.target.value == "Yes"){
      this.setState({hire:true});
    }
    else{
      this.setState({hire:false});
    }
  }
  handleProfileUpload = (e) =>{
    this.setState({profile_image: e.target.files[0]});
  }
  getHireClass = (value) => {
    if (this.state.hire){
      return 'btn btn-secondary ' + ((value=="Yes") ?'active':'');
    }
    return 'btn btn-secondary ' + ((value=="No") ?'active':'');
  }
  onSubmit = e => {
    e.preventDefault();
    const {bio, title, github, website, hire, profile_image, skills} = this.state;
    var updated_profile = new FormData();
    updated_profile.append("bio", bio);
    updated_profile.append("title", title);
    updated_profile.append("github", github);
    updated_profile.append("website", website);
    updated_profile.append("hire", hire);
    updated_profile.append("profile_image", profile_image);
    updated_profile.append("skills", skills);
    this.props.editProfile(updated_profile, this.props.profile.id);
    const {profile} = this.props;
    this.setState({
      title : profile.title,
      bio : profile.bio,
      github : profile.github,
      website : profile.website,
      hire : profile.hire,
      profile_image: profile.profile_image,
      skills : profile.skills
    });
  }

  render(){
    const {user, profile} = this.props
    const {bio, title, github, website, hire, skills} = this.state;
    return (
      <div className = "center-container container">
        <div className=" create_room_form mt-5 mb-5">
        <h2>EDIT PROFILE</h2>
        <form onSubmit={this.onSubmit}>

        <div className = "create_room_header">Title</div>
          <div className =" mt-2  form-group">
            <input
              className="create_room_title form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
              placeholder= {title}
            />
        </div>

        <div className = "create_room_header">Biography</div>
          <div className = "mt-2  form-group">
            <input
              className="create_room_title form-control"
              type="text"
              name="bio"
              onChange={this.onChange}
              value={bio}
              placeholder= {bio}
            />
        </div>

        <div className = "create_room_header">Github</div>
          <div className =" mt-2  form-group">
            <input
              className="create_room_title form-control"
              type="text"
              name="github"
              onChange={this.onChange}
              value={github}
              placeholder= {github}
            />
        </div>

        <div className = "create_room_header">Website</div>
          <div className =" mt-2  form-group">
            <input
              className="create_room_title form-control"
              type="text"
              name="website"
              onChange={this.onChange}
              value={website}
              placeholder= {website}
            />
        </div>


          <div className = "create_room_header">Hire</div>
          <div className="type_buttons btn-group-toggle" >
            <label className = {this.getHireClass("Yes")}>
              <input onClick = {this.onToggle}  type="radio" value = "Yes" name="hire" id="option1"   />
              <span className = "type_text"> Yes</span>
            </label>
            <label className = {this.getHireClass("No")}>
              <input onClick = {this.onToggle}  type="radio" value = "No" name="hire" id="option2"  />
                <span className = "type_text"> No</span>
            </label>
          </div>

          <div className = "create_room_header">Profile Image</div>
          <div>
          <input
              name='image'
              accept=".jpg,.jpeg,.png"
              id="flat-button-file"
              multiple={false}
              type="file"
              onChange={this.handleProfileUpload}
            />
         
          </div>

          <br/>
          <div className = "create_room_header">Skills</div>

          <div className="mt-2 form-group">
            <input
              className="form-control"
              type="text"
              name="skills"
              onChange={this.onChange}
              value={skills}
              placeholder= {skills}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="create_room_submit">
              Update
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    profile: state.curr_profile
  };
}

export default connect(mapStateToProps, {fetchProfile, editProfile})(ProfileForm);
