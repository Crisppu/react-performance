import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, image }) => (
  <li>
    {title} - <img src={image} alt={title} />
  </li>
);
Item.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
}

const areItemsEqual = (prevProps, nextProps) => {
  return prevProps.title === nextProps.title && prevProps.image === nextProps.image;
};

const MemoizedItemList = React.memo(ItemList, areItemsEqual);

const ItemList = ({ items }) => (
  <ul>
    {items.map(item => <MemoizedItemList key={item.id} {...item} />)}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};
export default ItemList;
