import React, {useState} from 'react'
import "./Carousel.css"

export default function Carousel() {
    const [activeImage, setActiveImage] = useState(3)
  return (
    <div className="container">
    <input type="radio" name="slider" id="item-1" checked={activeImage === 1} />
    <input type="radio" name="slider" id="item-2" checked={activeImage === 2} />
    <input type="radio" name="slider" id="item-3" checked={activeImage === 3} />
  <div className="cards">
    <label className="card" id="song-1">
      <img className="card-img" onClick={() => setActiveImage(1)} src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
    </label>
    <label className="card" id="song-2">
      <img className="card-img" onClick={() => setActiveImage(2)} src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
    </label>
    <label className="card" id="song-3">
      <img className="card-img" onClick={() => setActiveImage(3)} src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
    </label>
  </div>
</div>

  )
}
