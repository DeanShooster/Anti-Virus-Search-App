import './score-and-compatibility.scss';

import Score from './score/Score';
import Compatibility from './compatibility/Compatibility';

const ScoreNCompatibility = ( props ) => {

    return (
        <div className='score-and-compatibility'>
            <Score score={props.score}/>
            <Compatibility compatibility={props.compatibility}/>
        </div>
    );
};

export default ScoreNCompatibility;