
import Box from './Box';

const arr = [1,2,3,4,5,6,7,8];

function App() {
  return (
    <div className='flex flex-row'>
      {
        arr.map((index)=>{
          return <Box color = 'bg-red-300' key = {index}/>
        })
      }
      <Box color='bg-red-300'/>
      <Box color='bg-stone-700'/>
      <Box color='bg-red-300'/>
    </div>
  );
}

export default App;