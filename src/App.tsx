
import Box from './Box';

const arr = [1,2,3,4,5,6,7,8];

function App() {
  return (
    <div className='flex flex-col items-center'>
      {
        arr.map((index1)=>{
          return <div className='flex flex-row' key = {index1}>
          {
              arr.map((index)=>{
                let t ,u, pass;
                t= index1%2===1 ? 'bg-red-300' : 'bg-stone-700';
                u = index1%2===1 ? 'bg-stone-700' : 'bg-red-300';
                pass = index%2===1 ? t : u;
                return <Box color = {pass} key = {index}/>
               })
          }
        </div>
        })  
      }
    </div>
  );
}

export default App;

