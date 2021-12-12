import React from 'react'
import './Home.css'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import Chart from '../../Chart/Chart'
import { userData } from '../../../dummyData'
import WidgetLarge from '../../WidgetLarge/WidgetLarge'
import WidgetSmall from '../../WidgetSmall/WidgetSmall'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
            <div className='homeWidgets'>
                <WidgetLarge/>
                <WidgetSmall/>
            </div>
        </div>
    )
}
