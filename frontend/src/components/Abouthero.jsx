import React from 'react'

const Abouthero = () => {
  return (
    <div className="abouthero">
      <div className='delivery'>
        <img src="/images/delivery.jpg" alt="delivery"/>
        <p>Fast Delivery any where in Nigeria</p>
      </div>
      <div className='customer-care'>
        <img src="/images/customer-care.jpg" alt="customer care"/>
        <p>24/7 Customer Support</p>
      </div>
      <div className='refund'>
        <img src="/images/refund.jpg" alt="refund" />
        <p>Easy Refunds within 30 days</p>
      </div>
    </div>
  )
}

export default Abouthero
