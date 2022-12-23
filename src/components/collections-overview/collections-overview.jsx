import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => {
  return <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>;
}; 

const mapDataToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapDataToProps)(CollectionsOverview);
