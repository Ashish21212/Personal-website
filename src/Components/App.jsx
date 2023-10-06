import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Detail from './Detail';
import data from './Adata';
import Devertical from './Devertical';
import Footers from './Footers';

const App=()=>{
    return(
        <>
        <Navbar/>
        <Intro/>
        <Detail/>
       <Devertical
     imgsrc={data[0].imgsrc}
     imgtitle={data[0].imgtitle}
     imgtext={data[0].imgtext}
       />
       <Devertical
      imgsrc={data[1].imgsrc}
      imgtitle={data[1].imgtitle}
      imgtext={data[1].imgtext}
     />
     <Devertical
     imgsrc={data[2].imgsrc}
     imgtitle={data[2].imgtitle}
     imgtext={data[2].imgtext}
     />
     <Devertical
     imgsrc={data[3].imgsrc}
     imgtitle={data[3].imgtitle}
     imgtext={data[3].imgtext}
     />
     <Devertical
     imgsrc={data[4].imgsrc}
     imgtitle={data[4].imgtitle}
     imgtext={data[4].imgtext}
     
     />
     <Footers/>

     
       
        
        
        </>
    )
}
export default App;