import {BlackKing , BlackQueen , BlackBishop,BlackKnight,BlackPawn,BlackRook,WhiteKing,WhiteQueen,WhiteKnight,WhiteBishop,WhiteRook,WhitePawn} from "./images";

function Box({color}:any){
return<div className={`flex items-center justify-center w-16 h-16 ${color}`}>
    <BlackQueen/>
</div>
}
export default Box;