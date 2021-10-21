import React, { Component } from "react";

class FBComment extends Component {
    componentDidMount() {
        this.props.mediaQueries("(max-width: 950px)", () => {
            this.setState({
                mobile: true,
            });
        });
        this.props.mediaQueries("(min-width: 951px)", () => {
            this.setState({
                mobile: false,
            });
        });

        function init() {
            FB.api("/l214.animaux", { fields: "fan_count" }, function (response) {
                alert(response.fan_count);
            });
        }

        window.fbAsyncInit = () => {
            FB.init({
                appId: this.props.appId,
                xfbml: true,
                version: this.props.version,
            });
            FB.XFBML.parse();
        };
        (function (d, s, id) {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            const js = d.createElement(s);
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/es_ES/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }

    componentWillReceiveProps() {
        if (FB) {
            console.log("its in receiveProps");
            FB.XFBML.parse();
        }
    }

    componentDidUpate() {
        if (FB) {
            FB.XFBML.parse();
        }
    }

    render() {
        return <div />;
    }
}

export default FBComment;
