import { Fragment, useState } from 'react';

import './body.scss';
import {ImPlus} from 'react-icons/im';
import {AiOutlineClose} from 'react-icons/ai';

import AntiVirusCard from './anti-virus-card/AntiVirusCard';
import NewAntiVirusForm from './add-new-anti-virus-form/NewAntiVirusForm';
import Search from './search/Search';
import Loader from '../loader/Loader';

const Body = () => {

    const [newDataModal,setNewDataModal] = useState(false);

    const dummyData = [
        {
            image: 'https://www.escanav.com/en/images/anti-virus-for-linux-desktops.png',
            title: 'eScan',
            pointers: [
                'Limited Offer: Get 80% Off',
                '30-day money-back guarantee',
                'Provides complete online protection'
            ],
            score: { rate: 'Superb',number: 9.8, reviews: 59238 },
            compatibility: ['apple','ios','windows','android']
        },
        {
            image: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/2d9f9134-96d0-11e6-bf8f-00163ec9f5fa/1668108117/avast-Avast_Free_Antivirus_3D_Simplified_white_Box_right.png',
            title: 'Kaspersky',
            pointers: [
                '60 day full money-back guarantee',
                'Dark Web Monitoring',
                'Secure VPN',
                'Real Time Cyber Protection',
                '100% virus removal guarantee'
            ],
            score: { rate: 'Excellent', number: 9.4, reviews: 49215 },
            compatibility: ['apple','ios','windows']
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUiavVL2toTwjuiO6Vr9kUbBkZoWeO4p3FQ&usqp=CAU',
            title: 'Quick Heal',
            pointers: [
                'Dark Web Monitoring',
                'Online Protection',
                'Safe browsing'
            ],
            score: { rate: 'Good', number: 6.5, reviews: 35012 },
            compatibility: ['windows','android']
        }
    ];

    const [data,setData] = useState(dummyData);

    const AddNewDataForm = () => {
        setNewDataModal( !newDataModal );
    }

    const AddAntiVirus = ( event ) =>{
        const antiVirus = { title: null, pointers: [], score: {rate: null,number: 0, reviews: 0 }, compatibility: []};
        antiVirus.title = event.target[0].value; antiVirus.pointers[0] = event.target[1].value; antiVirus.pointers[1] = event.target[2].value;
        antiVirus.pointers[2] = event.target[3].value; antiVirus.pointers[3] = event.target[4].value;
        antiVirus.score = { rate: event.target[7].value, number: event.target[5].value, reviews: 50000 };
        antiVirus.compatibility = ['Apple','ios','windows','android'];
        antiVirus.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EydvJQ_lIS6Km-brB00wAZbys-5EvEx57w&usqp=CAU';
        data.push(antiVirus);
        setData(data);
        AddNewDataForm();
    }

    const SearchAntiVirus = (event) => {
        const result = data.filter( data => event.target.value === data.title );
        if( result.length > 0 )
            return setData(result);
        setData(dummyData);
    }

    return (
        <Fragment>
            <button className='new-anti-virus' onClick={AddNewDataForm}>{ !newDataModal ? <ImPlus className='svg-modal'/> : <AiOutlineClose className='svg-modal'/>}</button>
            {newDataModal && <NewAntiVirusForm AddAntiVirus={AddAntiVirus}/>}
            <Search SearchAntiVirus={SearchAntiVirus}/>
            <section>
                { data ? data.map( (virus,i)=> <AntiVirusCard key={i} antiVirus={virus}/> )  : <Loader /> }
            </section>
        </Fragment>
    );
}

export default Body;