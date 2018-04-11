import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import classes from "./ProfilePage";
const config = {
  apiKey: "AIzaSyDlJj3G-DLmLecV5B9eqMTXw61y2Hi9mNg",
  authDomain: "burgerback-d0dfd.firebaseapp.com",
  databaseURL: "https://burgerback-d0dfd.firebaseio.com",
  projectId: "burgerback-d0dfd",
  storageBucket: "burgerback-d0dfd.appspot.com",
  messagingSenderId: "815684140975"
};
firebase.initializeApp(config);

class ProfilePage extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: " "
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
    console.log(this.state);
  };

  render() {
    return (
      <div className={classes.FileUploader}>
        <form>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && (
            <img
              src={this.state.avatarURL}
              style={{ width: "100%", margin: "auto" }}
            />
          )}
          <div>
            <FileUploader
              className={classes.FileUploader}
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              //onClick={this.props.handleClick(this.props.avatarURL)}
              onProgress={this.handleProgress}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;
