import React from 'react'

function Main() {
  return (
    <>
    <div style={{border:'1px solid #d3174d',height:'200px',backgroundColor:'#d3174d'}}>
      <div>
        <p className='text-white fs-2 my-3' style={{textAlign:'center'}}>Over 157,000 hotels and homes across 35 countries</p>
        <div style={{display:'inline-flex',justifyContent:'center',display:'flex'}}>
          <input placeholder='Search by city,hotel,neighborhood' style={{padding:'10px',width:'350px'}} type='search' />
          <input type="date" />
          <input type="text" value={'1 Room ,1 Guest'}/>
          <input className='text-white' type="Search" style={{backgroundColor:'#1ab64f',textAlign:'center'}} value={'Search'}/>
        </div><br/>
        <div style={{display:'inline-flex',justifyContent:'center',display:'flex',gap:'30px'}}>
          <a className='text-white' style={{textDecoration:'none'}}>Continue your search</a>
          <p className='text-white ' style={{border:'1px solid white',borderRadius:'10px',padding:'5px'}}>Bangalore . 06 Oct - 07 Oct | Guests</p>
        </div>
      </div>
    </div>
      <img src={require('../Images/Screenshot (61).png')} alt="banner for ads" width="1510" height="auto" />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <div style={{border:'1px solid grey',padding:'2px',width:'1300px',height:'150px',borderRadius:'10px'}}>
          <div style={{display:'inline-flex'}}>
            <img className='mx-2' src={require('../Images/discount.png')} alt="" width="40" height="auto" />
            <p className='fw-bold fs-5'>Get access to exclusive deals</p>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <input style={{padding:'10px'}} type="email" placeholder='your email' name="" id="" />
            <input type="submit" value={'Notify me'} />
          </div>
          <p className='mx-5'>Only the best deals reach your inbox</p>
        </div> */}
      </div>
    </>
  )
}

export default Main