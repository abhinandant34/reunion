import React, { useState } from 'react'
import data from '../data/data'
import './SearchBar.css'
import Houses from '../Houses/Houses';


const SearchBar=()=> {
    const [filter, setFilter]=useState('');
    const [location,setLocation]=useState('');
    const [date,setDate]=useState('');
    const [price,setPrice]=useState('');
    const [type,setType]=useState('');
    const searchText=(event)=>
    {
        setFilter(event.target.value);
    }
    const searchLocation=(event)=>
    {
        setLocation(event.target.value);
    }
    const searchDate=(event)=>
    {
        setDate(event.target.value);
    }
    const searchPrice=(event)=>
    {
        setPrice(event.target.value);
    }
    const searchType=(event)=>
    {
        setType(event.target.value);
    }    

    let currentDate = new Date().toJSON().slice(0, 10);

    let dataSearch=data.cardData.filter(data=>{
        return Object.keys(data).some(key=>
            data[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    
    // let applyFilter=data.cardData.filter(data=>{
    //     return Object.keys(data).some(key=>
    //         data[key].toString().includes(location.toString()))
    // });

    // let applyFilter=data.cardData.filter(data=>{
    //     return Object.keys(data).some(key=>
    //         data[key].toString().includes(type.toString()))
    // });

    // let applyFilter=data.cardData.filter(data=>{
    //     return Object.keys(data).some(key=>
    //         data[key].toString().includes(date.toString()))
    // });

    let applyFilter=data.cardData.filter(data=>{
        return Object.keys(data).some(key=>
            data[key].toString().includes(price.toString()) && data[key].toString().includes(type.toString()) && data[key].toString().includes(location.toString()))
    });

    // function Output()
    // {
    //     console.log("hello");
    //     if(dataSearch!='' && applyFilter=='')
    //     return(
    //         <Houses
    //      data={dataSearch}
    //     />
    //     )
    //   else if(applyFilter!='' && dataSearch=='')
    //   {
    //     return(
    //         <Houses
    //             data={applyFilter}
    //         />
    //     )
    //   }
    //   else{
    //     return(
    //         <Houses
    //             data={data}
    //         />
    //     )
    //   }
    // }

  return (
    <div>
        <div className='searchbar'>
            <div className='searchbar-text'>Search Properties to Rents</div>
            <input type="text" name="searchName" onChange={searchText.bind(this)} value={filter} placeholder='Search with SearchBar' className='searchbar-input' />
        </div>
        <div className='filterbar'>
        <div className='filter'>
            <div className='filter-heading'>Location</div>
            <div className='filter-input'>
                <select name="location" value={location} onChange={searchLocation.bind(this)}>
                    <option value="Dalhousie">Dalhousie</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Banglore">Banglore</option>
                </select>
            </div>
        </div>
        <div className='filter'>
            <div className='filter-heading'>Select When move in</div>
            <div className='filter-input'>
                <input type="date" value={date} onChange={searchDate.bind(this)} className='input-date' min={currentDate}/>
            </div>
        </div>
        <div className='filter'>
            <div className='filter-heading'>Price</div>
            <div className='filter-input'>
                <select name="price" value={price} onChange={searchPrice.bind(this)}>
                    <option value="1000-5000">1000-5000</option>
                    <option value="5000-10000">5000-10000</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000+">20000+</option>
                </select>
            </div>    
        </div>
        <div className='filter'>
            <div className='filter-heading'>Property Type</div>
            <div className='filter-input'>
                <select name="propertyType" value={type} onChange={searchType.bind(this)}>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                </select>
            </div>    
        </div>
        <div className='filter-search-btn' >
            Search
        </div>
    </div>

        <Houses
            data={applyFilter}
        />


        {/* <div>{Output()}</div> */}
    </div>
  )

 
}

export default SearchBar