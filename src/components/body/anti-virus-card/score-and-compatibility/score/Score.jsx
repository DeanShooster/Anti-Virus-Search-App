import { Fragment } from "react"

import {BsStar, BsStarHalf , BsStarFill} from 'react-icons/bs';

const Score = ( props ) => {

    const FullStar = ( rating ) => {
        let stars = [];
        for(let i = 0; i < Math.floor(rating/2); i++ )
            stars.push(<BsStarFill key={Math.random()} className='stars'/>);
        if( (rating / 2) - Math.floor(rating/2) >= 0.75)
            stars.push(<BsStarFill key={Math.random()} className='stars'/>);
        return stars;
    }

    const HalfStar = ( rating ) => {
        if( (rating / 2) - Math.floor(rating/2) > 0.25 && (rating / 2) - Math.floor(rating/2) < 0.75 )
            return <BsStarHalf key={Math.random()} className='stars'/>
    }

    const EmptyStar = ( rating ) => {
        let emptyStars = []; const empty = (5 - (rating/2));
        for(let i = 0; i < Math.floor(empty); i++)
            emptyStars.push( <BsStar key={Math.random()} className='stars'/>);
            if( (rating / 2) - Math.floor(rating/2) <= 0.25 )
                emptyStars.push( <BsStar key={Math.random()} className='stars'/>);
        return emptyStars;
    }

    return (
        <Fragment>
            <div className='score'>
                <div className="slogan">{props.score.rate}</div>
                <div className="rating">{props.score.number}</div>
            </div>
            <div>
                {FullStar( props.score.number)} {HalfStar(props.score.number)} {EmptyStar(props.score.number)}
            </div>
            <div className='reviews'>Reviews ({props.score.reviews}) </div>
        </Fragment>
    );
};

export default Score;