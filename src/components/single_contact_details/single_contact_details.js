import React, { Component } from 'react';


class SingleContactList extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div class="uk-card uk-card-default uk-width-1-2@m">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src={require('../../assests/images/avatar.jpg')} />
              </div>
              <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
              </div>
            </div>
          </div>
          <div class="icon-set" uk-gird>

            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-phone icons" aria-hidden="true"></i>
              <br />
              Call
              </div>


            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-weixin icons" aria-hidden="true"></i>
              <br />
              Message
            </div>


            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-video-camera icons" aria-hidden="true"></i>
              <br />
              Video
              </div>


            <div class="uk-card uk-card-default uk-card-body card">
              <i class="fa fa-envelope icons" aria-hidden="true"></i>
              <br />
              Mail
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SingleContactList;