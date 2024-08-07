import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ADD_TO_CART } from '../redux/actions/action';

const initialItems = [
  { id: 1, name: 'Red Dress', image: 'https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', price: 49.99 },
  { id: 2, name: 'Blue Suit', image: 'https://i.pinimg.com/originals/5f/58/f0/5f58f03b886de83ae62c0116772aa50c.jpg', price: 89.99 },
  { id: 3, name: 'Green Shirt', image: 'https://observer.com/wp-content/uploads/sites/2/2015/01/bfa_11194_1364940.jpg?quality=80&w=1920&strip', price: 29.99 },
  { id: 4, name: 'Black Skirt', image: 'https://i.etsystatic.com/5609612/r/il/ffc300/500947564/il_1588xN.500947564_3r7l.jpg', price: 39.99 },
];

const SwapItems = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelect = (index) => {
    if (selectedIndices.length === 0) {
      setSelectedIndices([index]);
    } else if (selectedIndices.length === 1) {
      setSelectedIndices([...selectedIndices, index]);
      swapItems(selectedIndices[0], index);
    } else {
      setSelectedIndices([index]);
    }
  };

  const swapItems = (index1, index2) => {
    const newItems = [...items];
    [newItems[index1], newItems[index2]] = [newItems[index2], newItems[index1]];
    setItems(newItems);
    setSelectedIndices([]); // Reset selected indices
  };

  const handleRentNow = (item) => {
    dispatch(ADD_TO_CART(item));
    navigate('/payment', { state: { paymentInfo: { amount: item.price, itemName: item.name } } });
  };

  return (
    <div style={styles.container}>
      <h2>Swap Rental Clothing Items</h2>
      <div style={styles.list}>
        {items.map((item, index) => (
          <div
            key={item.id}
            style={styles.item(selectedIndices.includes(index))}
            onClick={() => handleSelect(index)}
          >
            <img src={item.image} alt={item.name} style={styles.image} />
            <div style={styles.info}>
              <h3>{item.name}</h3>
              <p style={styles.price}>Price: ${item.price.toFixed(2)}</p>
              <button style={styles.rentButton} onClick={() => handleRentNow(item)}>
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedIndices.length === 2 && (
        <button style={styles.button} onClick={() => swapItems(selectedIndices[0], selectedIndices[1])}>
          Swap Selected Items
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: (isSelected) => ({
    border: isSelected ? '2px solid blue' : '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
  }),
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  info: {
    marginTop: '10px',
  },
  price: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  button: {
    display: 'block',
    marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  rentButton: {
    display: 'block',
    marginTop: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default SwapItems;
