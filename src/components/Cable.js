import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ room }) => {
  return (
    <Fragment>
      
      {console.log(room.match.params.id)}
          <ActionCableConsumer
          key={room.match.params.id}  
          channel={{ channel: 'UsersChannel', room: room.match.params.id }}
          onReceived={console.log("cable recieved")}
          />
    </Fragment>
  );
};

export default Cable;