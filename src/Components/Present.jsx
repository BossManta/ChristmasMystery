import {ReactComponent as LidSvg} from '../Images/PresentLid.svg'
import {ReactComponent as BoxSvg} from '../Images/PresentBox.svg'

function Present({isCenter, setCenter, isOpen, setOpen, isZooming, setZooming, isCenterFin, giftType}) {
    
    const presentClick = () => {
        if (isCenterFin)
        {
            setOpen(true);
        }

        if (isOpen)
        {
            setZooming(true);   
        }
    }

    const onFinishedZoom = () => {
        setCenter(false);
        setOpen(false);
        setZooming(false);
    }
    
    return ( 
        <div onClick={presentClick} className={`relative bg-opacity-50 w-64 h-64 animate-spin ${isCenter?"animate-Wiggle":""}`}>
            <BoxSvg className={`absolute left-1/2 -translate-x-1/2 top-10 w-11/12 ${isOpen?' animate-BoxDrop':''}`}/>
            <LidSvg className={`absolute left-0 top-0 w-full ${isOpen?' animate-LidLift':''}`}/>
            <p onAnimationEnd={onFinishedZoom} className={`flex text-7xl color-black h-full w-full items-center justify-center text-red-500 font-serif ${isZooming?'animate-ZoomOff':''}`}>{giftType}</p>
        </div>
    );
}

export default Present;