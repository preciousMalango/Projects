import { useState } from 'react'
import './App.css'
import Header from './Header'
import { BiCart } from 'react-icons/bi'
import Footer from './Footer'

function App() {
  const [isVisible, setVisible] = useState(false)
  const [itemPrice, setItemPrice] = useState(null)
  const [itemName, setItemName] = useState(null)
  const [itemCover, setItemCover] = useState(null)
  const [item, setItem] = useState(null)
  const phone = "265894079775";

  const sendMessage = (item) => {
    const message = `I would like to order ${item.name}`;
    const messageEncoded = encodeURIComponent(message);
    const whatsApp = `whatsapp://send?phone=${phone}&text=${messageEncoded}`;
    window.location.href = whatsApp;
  }

  const popUp = (item) => {
    setVisible(true)
    setItemCover(item.cover)
    setItemName(item.name)
    setItemPrice(item.price)
    setItem(item)
  }
  const closePopUp = () => {
    setVisible(false)
  }

  const items = [
    {
      "id": 1,
      "name": "Chips Plain",
      "price": "MWK2500",
      "cover": "/chips chicken.jpg"
    },
    {
      "id": 2,
      "name": "Chips Chicken",
      "price": "MWK3500",
      "cover": "/chips chicken.jpg"
    },
    {
      "id": 3,
      "name": "Chips Chambo",
      "price": "MWK3500",
      "cover": "/chips chicken.jpg"
    },
    {
      "id": 4,
      "name": "Chips Chambo",
      "price": "MWK3500",
      "cover": "/chips chicken.jpg"
    }
  ]
  return (
    <>
      <Header />
      <div className="hero-section">
        <div className="overlay"></div>
        <h1>The grey eat better. </h1>
        <h4>The grey eat better. </h4>
        <p>The grey eat better. </p>
      </div>

      <div className="items">
        {items.map((item) => (
          <div className="card" id={item.id} onClick={() => popUp(item)}>
            <div className="card-img">
              <img src={item.cover} loading='lazy' alt='F1' />
            </div>
            <div className="meta-data">
              <div className="card-details">
                <div className="card-name">{item.name}</div>
                <div className="card-price">{item.price}</div>
              </div>
              <BiCart style={{ fontSize: "28px" }} />
            </div>
          </div>
        ))}
      </div>
      {isVisible &&
        <div className="pop-up">
          <div className="pop-up-cover">
            <div className="item-img">
              <img src={itemCover} />
            </div>
            <div className='item-name'>{itemName}</div>
            <div>{itemPrice}</div>
            <div className="buttons">
              <div className="button purchase" onClick={() => sendMessage(item)}>Purchase</div>
              <div className="button" onClick={closePopUp}>Close</div>
            </div>
          </div>
        </div>
      }
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}
export default App
