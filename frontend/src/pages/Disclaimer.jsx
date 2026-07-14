import React from 'react';
const textualStyle = {
    maxWidth :'900px',
    margin:'0 auto',
    padding:'40px',
    background:'#18181b',
    border:'1px solid rgba(255,255,255,0.05)',
    lineHeight:'1.8',
    color:'#a1a1aa'
};
const Disclaimer = ()=>{
    return(
        <div style={textualStyle}>
            <h2 style={{color:'#fff',marginBottom:'20px',borderBottom:'1px solid rgba(255,255,0.1)',paddingBottom:'15px'}} >Legal & Site Disclaimer </h2>
            <p  style={{marginBottom :'20px'}}>
                The data, interfaces, and graphical components represented across the ShopFusion domain strictly act uniquely as an educational deveploment platform.This codeBase models rigorous application structures and architectures for purely demmonstrative portfolio engineering usage.</p>
            
    
<h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>3. External Binding Links</h4>
      <p style={{ marginBottom: '15px' }}>
        ShopFusion operates completely independent domains and takes strictly zero absolute parameter responsibility over the specific contents or behaviors populated via external routing anchors generated implicitly by third-party configurations. 
      </p>

      <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem' }}>
        By interacting natively within this codebase, you unconditionally signal acceptance bounded by these parameters efficiently.
      </p>
    </div>
  );
};

export default Disclaimer;