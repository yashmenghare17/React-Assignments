import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Card from "./components/cards";
const root = createRoot(document.getElementById('root'));
const App = () => {
    const [ascore,setAScore] = useState(0);
    const [bscore,setBScore] = useState(0);
    const [result,setResult] = useState({team_name:'',message:''});
    useEffect(()=>{
        if(ascore > 10){
            setResult({team_name:'Team A',message:'Team A Win !!!!'});
            setAScore(0);
            setBScore(0);
        }
        if(bscore > 10){
            setResult({team_name:'Team B',message:'Team B Win !!!!'});
            setAScore(0);
            setBScore(0);
        }
    },[ascore,bscore]);
    const reset = () =>{
        setAScore(0);
        setBScore(0);
        setResult({team_name:'',message:''});
    }
    const incrementDecrement = (team_name,type) => {
        if(team_name=='Team A'){
            if(type=='Increment'){
                setAScore(ascore+1);
            }else{
                if(ascore > 0){
                    setAScore(ascore-1);
                }       
            }
        }else{
            if(type=='Increment'){
                setBScore(bscore+1);
            }else{
                if(bscore > 0){
                    setBScore(bscore-1);
                }   
            }
        }
    }
    return(
        <div className="w-full h-[100vh]">
            <header className="w-full bg-[#F1F0E9] md:flex">
                    <div className="w-full mt-5 mb-5 text-center md:text-5xl sm:2xl">
                        <h1 className=""><b>Score Keeper</b></h1>
                    </div>
            </header>
            <div className="w-full bg-[#41644A] md:flex sm:flex-col">
                <Card team_name={"Team A"} score={ascore} incrementDecrement={incrementDecrement} result={result}  reset={reset} />
                <Card team_name={"Team B"} score={bscore} incrementDecrement={incrementDecrement} result={result} reset={reset} />
            </div>
        </div>
    );
}
root.render(
    <App/>
);