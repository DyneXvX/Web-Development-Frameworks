//import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick = () => {
        alert('Click from the Header')
    }

  return (
    <header>
      <h1>{title}</h1>
      <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  );
};

Header.defaultProps = {
    title: 'Header2',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//  CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;
