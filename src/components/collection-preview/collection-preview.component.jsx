import React from "react";

import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  // console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="Title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item  => (
            <CollectionItem key={item.id} item={item} /> 
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
