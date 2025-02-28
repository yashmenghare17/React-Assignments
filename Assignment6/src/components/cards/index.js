import React from "react";
const Card = (props) => {
    const {team_name,score,incrementDecrement,result,reset} = props;
    return(
        <div className={`w-full flex flex-wrap justify-center ${(result.team_name==team_name) ? 'border-green-950':(result.team_name) ? 'hidden':''}`}>
                <div className="w-[200px] border-[#41644A]-600 m-5 bg-white rounded-xl">
                    <div className="text-3xl text-center h-[85px] mt-5">{team_name} {(result.team_name==team_name) ? '🥇':''}</div>
                    {(result.team_name==team_name) ? <div className="flex justify-center"><button className="w-[100px] rounded-xl bg-[#41644A] text-white block m-2 cursor-pointer" onClick={()=>reset()}>Reset</button></div>:<div className="text-center m-2 text-5xl mb-10"><b>{score}</b></div>}
                    <hr/>
                    <div className={`text-center m-2 flex justify-around ${(result.team_name==team_name) ? 'hidden':''}`}>
                        <button className="border  bg-[#41644A] text-white text-3xl pb-1 rounded-xl w-[40px] cursor-pointer" onClick={()=>incrementDecrement(team_name,'Increment')}>+</button>
                        <button className="border  bg-[#41644A] text-white text-3xl pb-1 rounded-xl w-[40px] cursor-pointer" onClick={()=>incrementDecrement(team_name,'Decrement')}>-</button>
                    </div>
                </div>
            </div>
    )
};
export default Card; 