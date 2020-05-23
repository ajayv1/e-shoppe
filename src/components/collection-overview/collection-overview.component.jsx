import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverView = ({ collections }) => (
  <div className="collection-overview">
    {
      collections.map(collection => (
        <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverView);