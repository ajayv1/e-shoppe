import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(section => {
        return <MenuItem key={section.id} section={section} />
      })
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);

