import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quidem perferendis ratione iste hic placeat qui officiis excepturi, nemo cum molestias, amet, maiores accusantium enim animi magni. Possimus cupiditate amet enim, temporibus sed inventore assumenda!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
