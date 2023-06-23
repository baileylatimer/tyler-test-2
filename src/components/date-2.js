import React from 'react';

class Timezone2 extends React.Component {

  state={

    curTime: new Date().toLocaleTimeString(['en-US'], { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: true }),

  }

  render(){

    return (



        <span className='ml-4'>Los Angeles {this.state.curTime}</span>



    );

  }

}


export default Timezone2;
