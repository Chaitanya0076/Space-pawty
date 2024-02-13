import './index.css'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState} from 'react';
export default function Nav(){

    const [mod,setmod] = useState(false);
    const [scrollColor,setscrollcolor] =useState('white');


    let scroll = window.scrollY;
    function handleScroll(){
        console.log(scroll)
        if(scroll>=300){     //scroll>=67
            setscrollcolor('white');
        }else{
            setscrollcolor('rgb(19,19,19)');
        }
        // if(scroll<=200){
        //     setscrollcolor('rgb(19,19,19)');
        // }
    }
    
    function handleClick() {
        setmod(prevmod=> !prevmod)
    }

    
        window.addEventListener('scroll', handleScroll);
        
    
    return (
        <div>
         <nav className='nav' style={{color:scrollColor,transition:'color 0.2s'}} >
            <div className='title' style={{color:scrollColor,transition:'color 0.2s'}}>Space Paw-ty</div>
            <div className='nav-list'>
            <a className="list-items" href="#home" style={{color:scrollColor,transition:'color 0.2s'}}>Home</a>
            <a className="list-items" href="#spaceCat" style={{color:scrollColor,transition:'color 0.2s'}}>SpaceCat</a>
            <a className="list-items" href="#spaceDog" style={{color:scrollColor,transition:'color 0.2s'}}>SpaceDog</a>
            <a className="list-items" href="#spaceHen" style={{color:scrollColor,transition:'color 0.2s'}}>SpaceHen</a>
            </div>
            <div className='burger' style={{color:scrollColor,transition:'color 0.2s'}} onClick={handleClick}><MenuIcon fontSize='medium' /></div>
         </nav>
        { mod && <div className='nav-mod'>
            <div className='close' onClick={handleClick}><ClearIcon fontSize='medium'/></div>
            <div className='nav-mod-title'>Space Paw-ty</div>
            <div className='nav-mod-list'>
            <a className="nav-mod-items" href="#home">Home</a>
            <a className="nav-mod-items" href="#spaceCat">SpaceCat</a>
            <a className="nav-mod-items" href="#spaceDog">SpaceDog</a>
            <a className="nav-mod-items" href="#spaceHen">SpaceHen</a>
            </div>
         </div>}
        
         </div>
    )
}


