import React from 'react';
import GoogleLogin from 'react-google-login'

class GoogleLoginComponent extends React.Component {

    responsGoogle = respons =>{
        this.props.onSocialRegSubmit(respons.profileObj.email);
        console.log(respons.profileObj.email)
    };

    responsGoogleError = () =>{
        console.log('error')
    };

    render() {
        return <GoogleLogin
            clientId={'878078476280-2jfn6kg182nb4p4qc2le8afk8o63ao0s.apps.googleusercontent.com'}
            buttonText={'Login with google!'}
            onSuccess={this.responsGoogle}
            onFailure={this.responsGoogleError}
            cookiePolicy={'single_host_origin'}/>

    }

}

export default GoogleLoginComponent;