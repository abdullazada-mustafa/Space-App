import React from "react";
import { Airplane, City, Direction, Earth, Entry, Line, Mars, Moon, Photo1, Photo2, Planetbackground, Rectangle, Rocket, Sea, Venus } from "../../assets";
import './spaceapp.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'


const Spaceapp = ()=>{


    return(
        <div className="spaceApp">
            <div className="left">
                <div className="left__big-photo">
                    <img src={Photo1} className="photo1"/>
                    <p className="left__big-photo-title">Expedition Earth 2.0</p>
                    <p className="left__big-photo-entry">Entry Code</p>
                    <img src={Direction} className="direction"/>
                </div>
                <div className="left__little-photos">
                    <div className="left__little-photos-subdiv">
                    <img src={City} className="little-photo"/>
                        <img src={Rectangle} className="rectangle"/>
                        <p>Post Apocalyptic City</p>
                    </div>
                    <div className="left__little-photos-subdiv">
                    <img src={Rocket} className="little-photo"/>

                        <img src={Rectangle} className="rectangle"/>
                        <p>Launching Station</p>
                    </div>
                    <div className="left__little-photos-subdiv">
                    <img src={Sea} className="little-photo"/>

                        <img src={Rectangle} className="rectangle"/>
                        <p className="sea">Sea Steading</p>
                    </div>
                </div>
            </div>

            <div className="right">
            <img src={Photo2} className="photo2"/>
                <div className="right__big-photo">
                    <div className="right__big-photo-header">
                        <AiOutlineArrowLeft className="right__big-photo-header-icon"/>
                        <p>Journey Details</p>
                    </div>
                    <div className="right__big-photo-tracking">
                        <p className="right__big-photo-tracking-live-tracking">Live Tracking</p>
                        <p>Reaching destination : 5 seconds</p>
                        <div className="right__big-photo-tracking-images">
                            <img src={Mars} className="right__big-photo-tracking-images-mars"/>
                            <img src={Line} className="right__big-photo-tracking-images-line"/>
                            <img src={Airplane} className="right__big-photo-tracking-images-airplane slide-right"/>
                            <img src={Earth} className="right__big-photo-tracking-images-earth"/>
                        </div>
                    </div>
                    <div className="right__big-photo-ongoing">
                        <img src={Entry} className="right__big-photo-ongoing-entry puff-in-center"/>
                    </div>
                    <div className="right__big-photo-schedule">
                        <p className="right__big-photo-schedule-text">Schedule next</p>
                        <div className="right__big-photo-schedule-subdiv">
                            <div className="right__big-photo-schedule-subdiv-venus">
                                <div className="right__big-photo-schedule-subdiv-venus-text">
                                    <p>Venus</p>
                                    <p>2.3 light yrs</p>
                                    <p>Plan {">>"}</p>
                                </div>
                                <img src={Planetbackground} className="right__big-photo-schedule-venus-planetbackground"/>
                                <img src={Venus} className="right__big-photo-schedule-subdiv-venus-image"/>
                            </div>
                            <div className="right__big-photo-schedule-subdiv-moon">
                                <div className="right__big-photo-schedule-subdiv-moon-text">
                                    <p>Moon</p>
                                    <p>0.5 light yrs</p>
                                    <p>Plan {">>"}</p>
                                </div>
                                    <img src={Planetbackground} className="right__big-photo-schedule-moon-planetbackground"/>
                                <img src={Moon} className="right__big-photo-schedule-subdiv-moon-image"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Spaceapp