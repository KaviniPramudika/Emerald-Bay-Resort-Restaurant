

import React, { useState } from 'react';
import DeliveryManagerSideBar from './DeliveryManagerSideBar.js';
import "../DeliveryManager/DeliveryManagerOrders.css";

export const DeliveryManagerOrders = () => {
  // State to manage the current active section
  const [activeSection, setActiveSection] = useState('completed');
  const [selectedRider, setSelectedRider] = useState('');

  // Function to handle section change
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const handleRiderChange = (event) => {
    setSelectedRider(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="ordercontainer" style={{ display: 'flex' }}>
        <DeliveryManagerSideBar />

        <div className="orderdash">
          <h1 className='name'>Orders</h1>

          <div className="orderstatus">
            <button onClick={() => handleSectionChange('completed')} className={`btn ${activeSection === 'completed' ? 'btn-success' : 'btn-outline-primary'}`}>Completed</button>
            <button onClick={() => handleSectionChange('pending')} className={`btn ${activeSection === 'pending' ? 'btn-warning' : 'btn-outline-primary'}`}>Pending</button>
            <button onClick={() => handleSectionChange('ongoing')} className={`btn ${activeSection === 'ongoing' ? 'btn-danger' : 'btn-outline-primary'}`}>Ongoing</button>
          </div>

          {/* Conditional rendering based on active section */}
          {activeSection === 'completed' && (
            <section className='completedOrders'>
              {/*<h1 className='name'>Completed Orders</h1> */}

                {/*completed order details */ }

                <div className="completeordercard">
                  <div className="section1">
                          <h3 className='orderid'>Order Id : order id</h3>
                          <h3 className='cusid'>Customer Id : id</h3>
                          
                          <h3 className="cusname">Customer Name : name</h3>
                  </div>
                      <div className="section2">
                          <h3 className="address">Address : Address</h3>
                          <h3 className="rider">Rider: RiderName</h3>
                      </div>
                  </div>

               
              
            </section>
          )}
          {activeSection === 'pending' && (
            <section className='pendingOrders'>
             {/* <h1 className='name'>Pending Orders</h1> */}
              {/* Content for pending orders */}

                <div className="ordercard">

                    <div className="section1">
                        <h3 className='orderid'>Order Id : order id</h3>
                        <h3 className='cusid'>Customer Id : id</h3>
                        
                        <h3 className="cusname">Customer Name : name</h3>
                    </div>
                    <div className="section2">
                        <h3 className="address">Address : Address</h3>
                        <label htmlFor="riderSelect"><h3>Assign a Rider:</h3></label>
                            <select id="riderSelect" value={selectedRider}  onChange={handleRiderChange}>
                                <option value="">Select a rider</option>
                                <option value="rider1">Rider 1</option>
                                <option value="rider2">Rider 2</option>
                                {/* Add more options as needed */}
                            </select>

                            <button type="submit" class="btn btn-secondary btn-sm submitbtn">Submit</button>
                    </div>

                </div>
            </section>
          )}
          {activeSection === 'ongoing' && (
            <section className='ongoingOrders'>
              {/*<h1 className='name'>Ongoing Orders</h1> */}
              {/* Content for ongoing orders */}
              <div className="ongoingordercard">
                  <div className="section1">
                          <h3 className='orderid'>Order Id : order id</h3>
                          <h3 className='cusid'>Customer Id : id</h3>
                          
                          <h3 className="cusname">Customer Name : name</h3>
                  </div>
                      <div className="section2">
                          <h3 className="address">Address : Address</h3>
                          <h3 className="rider">Rider: RiderName</h3>
                      </div>
                  </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

