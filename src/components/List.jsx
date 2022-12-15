import { useState } from 'react';

import '../styles/List.css';

export const List = () => {
  const [listItems, setListItems] = useState([])
  const [item, setItem] = useState({
    product: '',
    qty: 0,
    price: 0,
  });
  
  const addToList = () => {
    setListItems([
      ...listItems,
      item
    ])
    setItem({
      product: '',
      qty: 0,
      price: 0
    })
  };

  const deleteItem = (index) => {
    console.log(`Deleting item at index ${index}`);
    setListItems(listItems.filter((item, i) => i !== index));
  };

  const handleChange = ({target: {value}}, fieldName) => {
    setItem({
      ...item,
      [fieldName]: value
    })
  };

  const total = listItems.reduce((tot, item) => tot + (item.price * item.qty), 0);

  return (
    <>
      <div className='inputs'>
        <form>
          <label htmlFor=''>Enter Product: </label>
          <input type='text' value={item.product} onChange={(e) => handleChange(e, 'product')} placeholder='Product' name='product' required />
          <label htmlFor=''>Quantity: </label>
          <input type='number' value={item.qty} onChange={(e) => handleChange(e, 'qty')} placeholder='Qty' name='qty' required />
          <label htmlFor=''>Cost: </label>
          <input type='number' value={item.price} onChange={(e) => handleChange(e, 'price')} placeholder='Price' name='price' required />
        </form>
        <button type='button' onClick={() => addToList()}  >Add Item</button>
      </div>

    <div className='list-container'>
      <ul>
      { listItems.map((listItem, i) => {
        const {product, qty, price} = listItem;

        return (
            <li className='list-items'>
              <div>{product}</div>
              <div>{qty}</div>
              <div>{ `$ ${price}`}</div>
              <button type='button' onClick={() => deleteItem(i)}>Delete Item</button>
            </li>
        )
      })
      }
      </ul>
    </div>
      <div className='total-container'>
        <span>Total ${total}</span>
      </div>
    </>
  )
}