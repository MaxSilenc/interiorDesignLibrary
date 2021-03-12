import React from 'react';
import SliderSection from './SliderSection/SliderSection'
import Diractions from './Diractions/Diractions'
import SomeInfo from './SomeInfo/SomeInfo'

const MainPage = (props) => {
    return (
        <div>
            <SliderSection {...props}/>
        </div>
    );
};

export default MainPage;