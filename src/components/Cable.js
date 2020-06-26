import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ rooms }) => {
  return (
    <Fragment>
      {/* {console.log("in cable", this.props)} */}
          <ActionCable
          // key={this.props.room_id}  
          // channel={{ channel: 'UsersChannel', room: this.props.room_id }}
          // onReceived={console.log("cable recieved")}
          />
    </Fragment>
  );
};

export default Cable;