import React from "react";
import {onSignIn,onSignOut} from '../actions';
import {connect} from 'react-redux';

class Gauth extends React.Component {

    componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "522376023053-ioakjmblsoj30al5h09g0rq6m2t96beb.apps.googleusercontent.com",
          scope: "email profile",
        })
        .then(() => {
          this.GoogleAuth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.GoogleAuth.isSignedIn.get());
          this.GoogleAuth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  renderAuthButton = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) return null;
    else if (isSignedIn) {
      return (
        <button
          onClick={() => this.GoogleAuth.signOut()}
          className="ui red google button">
          <i className=" google icon">Sign Out</i>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => this.GoogleAuth.signIn()}
          className="ui red google button">
          <i className=" google icon">Sign In with google</i>
        </button>
      );
    }
  };

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) this.props.onSignIn(this.GoogleAuth.currentUser.get().getId());
    else this.props.onSignOut();
  };

  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{onSignIn,onSignOut})(Gauth);
