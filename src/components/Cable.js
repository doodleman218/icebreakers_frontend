import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ rooms }) => {
  return (
    <Fragment>
      {rooms.map(room => {
        return (
          <ActionCable
            key={room.id}  
            channel={{ channel: 'UsersChannel', room: room.id }}
            onReceived={""}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;