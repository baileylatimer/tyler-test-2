import React from 'react';

class Timezone extends React.Component {
  state = {
    curTime: new Date().toLocaleTimeString(['en-US'], { timeZone: 'America/Denver', hour: '2-digit', minute: '2-digit', hour12: true }),
  }

  render() {
    return (
      <span>Provo {this.state.curTime}</span>
    );
  }
}


export default Timezone;
