import {BlackKing , BlackQueen , BlackBishop,BlackKnight,BlackPawn,BlackRook,WhiteKing,WhiteQueen,WhiteKnight,WhiteBishop,WhiteRook,WhitePawn} from "./images";

const Value = ({currVal}:any)=>{
   switch(currVal){
    case 'BP':
        return <BlackPawn/>
    case 'WP':
        return <WhitePawn/>
    case 'BK':
        return <BlackKing/>
    case 'WK':
        return <WhiteKing/>
    case 'WR':
        return <WhiteRook/>
    case 'BR':
        return <BlackRook/>
    case 'BN':
        return <BlackKnight/>
    case 'BQ':
        return <BlackQueen/>
    case 'BB':
        return <BlackBishop/>
    case 'WQ':
        return <WhiteQueen/>
    case 'WN':
        return <WhiteKnight/>
    case 'WB':
        return <WhiteBishop/>
    default:
        return null;
   }
}
const manageArray = (arr:any,setArr:any,cordinate:any)=>{
    let temp = [...arr];
    temp[cordinate.x][cordinate.y] = '';
    console.log('arr -->',arr);
    setArr(temp);
}

function Box({color,currVal,setArr,arr,cordinate}:any){
    
return<div className={`flex items-center justify-center w-16 h-16 ${color} cursor-pointer`} onClick={()=>{
    manageArray(arr,setArr,cordinate);
}}>
    {
        <Value currVal={currVal}/>
    }
</div>
}
export default Box;