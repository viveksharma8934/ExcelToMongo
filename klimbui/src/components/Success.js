import React from 'react'

function Success() {
  return (
    <div style={{display:'flex', alignItem:'center',justifyContent:'center'}}>
        <div style={{height:'300px',width:'1000px',border:'1px solid black', display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div style={{color:'#00FF00',fontWeight:'bold'}}>Thank You!</div>
            <div>✅ File Successfully Uploaded</div>
            <div>Your Records will be Processed Shortly</div>
        </div>
    </div>
  )
}

export default Success