import { useState } from "react";
import GetNNOptions, { GiftOptions } from "./Components/NaughtyNiceTester";
import Present from "./Components/Present";

function App() {

  const [isCenter, setCenter] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isAnimFinished, setAnimFinished] = useState(false);
  const [isZooming, setZooming] = useState(false);
  const [isTextWiggle, setTextWiggle] = useState(false);
  const giftOptions = GiftOptions;


  const handleAnimationEnd = () => {
    setAnimFinished(true);
  }

  const onNameSubmit = (e) => {
    e.preventDefault();
    setName(e.target.firstChild.value);
    
    if (!isCenter)
    {
      setAnimFinished(false);
    }
    setCenter(true);
  }

  const textChange = () => {
    setTextWiggle(true);
  }
 
  return (
    <div className="bg-red-600 p-10 text-white text-5xl text-center flex flex-row items-center justify-around">

      <p>☃</p>

      <div>
        <p className="font-mono">
          🎅Christmas Mystery🎄
        </p>

        <div className={`fixed -top-96 left-1/2 transition-all ${isCenter?" animate-FloatToScreen visible":""}`} onAnimationEnd={handleAnimationEnd}>
          <Present isZooming={isZooming} setZooming={setZooming} setOpen={setOpen} isOpen={isOpen} giftType={GetNNOptions(giftOptions,name)} setCenter={setCenter} isCenterFin={isAnimFinished} isCenter={isCenter}/>
        </div>

        <form onSubmit={(e)=>onNameSubmit(e)}>
          <input disabled={isCenter} onChange={textChange} onAnimationEnd={()=>setTextWiggle(false)} type="text" name="Name" id="" placeholder="Your Name" className={`text-3xl text-gray-600 disabled:bg-red-700 disabled:text-red-900 text-center m-5 rounded-md font-mono p-1 ${isTextWiggle?'animate-TextPulse':''}`} />
        </form>
      </div>

      <p>🏂</p>

    </div>
  );
}

export default App;
