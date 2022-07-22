import React from "react";
import { Logo } from "../../assets";
import {FaDribbble, FaLinkedinIn, FaFacebookSquare,FaBehance, FaInstagram,FaTwitter} from 'react-icons/fa'
import './likefollow.css'

const Likefollow = ()=>{
    return(
        <div className="likefollow">
            <img src={Logo} alt="logo" className="likefollow__logo"/>
            <div className="likefollow__div">
                <div className="likefollow__div-subdiv">
                    <span style={{color:'#FB896B'}}>LIKE</span>
                    <span>AND</span>
                    <span style={{color:'#FB896B'}}>FOLLOW</span>
                </div>
                <span>FOR REGULAR</span>
                <span>UPDATES</span>
            </div>
            <div className="likefollow__footer">
                <div className="likefollow__footer-contact">
                    <span>ANY QUERIES? VISIT ME ON</span>
                    <a href="https://github.com/abdullazada-mustafa" target="_blank">www.github.com/abdullazada-mustafa</a>
                </div>
                <div className="likefollow__footer-socialmedia">
                    <a href="#"><FaDribbble/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaLinkedinIn/></a>
                    <a href="#"><FaFacebookSquare/></a>
                    <a href="#"><FaBehance/></a>
                </div>
            </div>
        </div>
    )
}

export default Likefollow