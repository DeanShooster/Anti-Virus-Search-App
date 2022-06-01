import './anti-virus-card.scss';
import {AiOutlineCheck} from 'react-icons/ai';

import ScoreNCompatibility from './score-and-compatibility/ScoreNCompatibility';
import SiteSource from './site-source/SiteSource';

const AntiVirusCard = ( props ) =>{

    const checkMark = <AiOutlineCheck className='check-mark'/>;

    return (
        <div className='anti-virus-card'>
            <div className='image-intro-container'>
                <img src={props.antiVirus.image}/>
                <div>
                    <h4>{props.antiVirus.title}</h4>
                    {props.antiVirus.pointers.map (( point,i ) => <p key={i}>{checkMark} <span>{point}</span></p> ) }
                </div>
            </div>
            <ScoreNCompatibility score={ props.antiVirus.score } compatibility={ props.antiVirus.compatibility}/>
            <SiteSource />
        </div>
    );
};

export default AntiVirusCard;