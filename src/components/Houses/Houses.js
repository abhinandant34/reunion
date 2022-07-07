import React from 'react'
import Card from '../Card/Card'
import './Houses.css'
function Houses({data}) {

  if(data=='')
  {
    return (
        <div className='no-data'>
            No data matched
        </div>
    )
  }
  else
  {
  return (
    <div className='houses'>
        {data.map((data,key)=>{
            return(
                <div key={key}>
                    <Card
                        key={key}
                        img={data.image}
                        rent={data.rent}
                        name={data.name}
                        location={data.location}
                        beds={data.beds}
                        bathroom={data.bathroom}
                        size={data.size}
                    />            
                </div>
            );
        })}


    </div>
  )
}
}

export default Houses