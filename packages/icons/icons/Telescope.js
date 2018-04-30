
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TelescopeIcon extends Component {
  render() {
    var defaults = {
      'aria-hidden': true,
      height: 16,
      width: 14,
      viewBox: '0 0 14 16',
      style: {
        display: 'inline-block',
        verticalAlign: 'text-top',
        fill: 'currentColor',
      },
    };
    return (
      <svg {...defaults} {...this.props}>
        <path fillRule="evenodd" d="M7.59 9l3 6h-1l-2-4v5h-1v-6l-2 5h-1l2-5 2-1zm-1-9h-1v1h1V0zm-2 3h-1v1h1V3zm-3-2h-1v1h1V1zM.22 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66-1.16-2-1.27.86.01.01zm7.89-5.39l-5.8 3.95L3.54 9.7l6.33-3.03L8.1 3.61h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83 1.84 3.2 1.33-.64c.27-.13.36-.44.22-.7z"/>
      </svg>
    );
  }
}
export default TelescopeIcon;