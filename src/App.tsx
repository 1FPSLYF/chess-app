
import { useState } from 'react';
import Box from './Box';

const initialState = [['WR','WN','WB','WQ','WK','WB','WN','WR'],['WP','WP','WP','WP','WP','WP','WP','WP'],['','','','','','','',''],
['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['BP','BP','BP','BP','BP','BP','BP','BP'],['BR','BN','BB','BK','BQ','BB','BN','BR']];

function App() {
      const[arr,setArr] = useState(initialState);

  return (
    <div className='flex flex-col items-center'>
      {
        arr.map((currVal1,index1)=>{
          return <div className='flex flex-row' key = {index1}>
          {
              currVal1.map((currVal,index)=>{
                let t ,u, pass;
                t= index1%2===1 ? 'bg-red-300' : 'bg-stone-400';
                u = index1%2===1 ? 'bg-stone-400' : 'bg-red-300';
                pass = index%2===1 ? t : u;
                return <Box key = {index} color = {pass} currVal = {currVal} setArr = {setArr} arr={arr} cordinate={{x:index1,y:index}}/>
               })
          }
        </div>
        })  
      }
    </div>
  );
}

export default App;

