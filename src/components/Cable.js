import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ rooms }) => {
  return (
    <Fragment>
      {console.log("in cable")}
      {rooms.map(room => {
        return (
          <ActionCable
          key={room.id}  
          channel={{ channel: 'UsersChannel', room: room.id }}
          onReceived={console.log("cable recieved")}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;