import {AiFillApple} from 'react-icons/ai';
import {SiIos} from 'react-icons/si';
import {AiFillWindows} from 'react-icons/ai';
import {MdOutlineAndroid} from 'react-icons/md';

const Compatibility = ( props ) => {
    return (
        <div className='compatibility'>
            <span>Compatibility</span> { props.compatibility.map( (platform,i)=>{
                if( platform === 'apple') return <AiFillApple key={i} className='platform'/>
                if( platform === 'ios') return <SiIos key={i} className='platform'/>
                if( platform === 'windows') return <AiFillWindows key={i}className='platform'/>
                if( platform === 'android') return <MdOutlineAndroid key={i} className='platform'/>
            } )  }
        </div>
    );
};

export default Compatibility;