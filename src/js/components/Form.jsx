import React from 'react';

export default class Form extends React.Component {
  render () {
    return (
    	<form action="/#">
        First name:
        <input type="text" name="firstname" />
        Last name:
        <input type="text" name="lastname" defaultValue="Mouse" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



