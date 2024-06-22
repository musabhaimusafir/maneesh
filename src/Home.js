import { useEffect, useState } from "react";




const Home = () => {
      const [num,setNum]=useState(null);
      const [myData,setMyData]=useState([]);
      const loadData=async()=>{
         let url = `https://jsonplaceholder.typicode.com/posts/${num}/comments`;
         let data =await fetch(url);
         let result=await data.json();
         setMyData(result);
      }
      const handleClick=()=>{
        let num=Math.floor(Math.random()*(10-1)+1);
        setNum(num);
       myData.length=0;
        // console.log(num);
      }
      console.log(myData);
  useEffect(()=>{
    loadData(); 
  },[num]);

  let ans=myData.map((item)=>{
    return(
      <>
      <tr>
        <td>{item.email}</td>
        <td>{item.body}</td>

      </tr>
      </>
    )
  })
  return(
         <>
  <div className="container">
    <h1>Problem Statement !</h1>   

     <div className="list">
          <div className="rendom-item">
            <div className="rendom-num">{num}</div>
            <button onClick={handleClick}>Refress</button>
          </div>
          <div className='title1'>
      
      <table>
          <tr>
              <th>Email : </th>
              <th>Body : </th>
             
          </tr>
          {ans}
      </table>
     
  </div>
     </div>
    
  </div>
      
       </>

  )
}

export default Home;