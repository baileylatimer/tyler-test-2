import React, { useEffect } from 'react';

const TableauComponent = () => {
  useEffect(() => {
    // Append the script manually to the DOM
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://us-west-2b.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    document.body.appendChild(script);

    return () => {
      // Remove script from DOM
      document.body.removeChild(script);
    }
  }, []); // Empty array means this effect runs once on mount and cleanup on unmount

  return (
    <tableau-viz
      id='tableau-viz'
      src='https://us-west-2b.online.tableau.com/t/howdy/views/Superstore/Overview'
      width='1440'
      height='683'
      toolbar='bottom'
    />
  );
};

export default TableauComponent;
