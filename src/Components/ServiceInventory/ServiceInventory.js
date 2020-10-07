import React from 'react';
import servicesData from '../../fakeData/data.json'

const ServiceInventory = () => {

    //this code use for load mongo DB from fake data and comment out for not becoming error



    // const handleAddService = () =>{
    //    fetch('https://fast-chamber-99954.herokuapp.com/addService', {
    //        method: 'POST',
    //        headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify(servicesData)
    //    })

    // }
    return (
        <div>
            {/* <button onClick={handleAddService}>Add Services to Database</button> */}
        </div>
    );
};

export default ServiceInventory;