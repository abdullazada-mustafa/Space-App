import React from "react";
import {Icon, Anakiwa, Atomictangerine, Dodgerblue, Hotcinnamon, Tiber} from "../../assets";
import './typography.css'

const Fonts = ({ font, size, type }) => (
   <>
      <table>
         <tr className="fonts-subdiv">
             <td>{font}</td>
             <td>{size}</td>
             <td>{type}</td>
         </tr>
      </table>
   </>
)
const Typography = ()=>{
   return(
    <div className="typography">
        <img src={Icon} className="typography__icon"/>
        <div className="typography__header">
            <p>Fonts</p>
            <p>Colors</p>
         </div>
        <div className="fonts__colors">
            <div className="fonts">
               <Fonts font="BEBAS NEUE" size="Regular" type="H1/30PX"/>
               <Fonts font="Mohave" size="Medium" type="Sub title/25px"/>
               <Fonts font="Mohave" size="Medium" type="Sub title/25px"/>
               <Fonts font="Mohave" size="Medium" type="Body text/20px"/>
               <Fonts font="Mohave" size="Medium" type="Accent/16px"/>
            </div>
            <div className="colors">
               <div className="colors__primary">
                  <span className="colors__primary-primary">Primary</span>
                  <span className="colors__primary-tiber-code">#092536</span>
                  <span className="colors__primary-anakiwa-code">#9CDBFF</span>
                  <span className="colors__primary-dodgerblue-code">#3BB7FF</span>
                  <img src={Tiber} className="colors__primary-tiber"/>
                  <img src={Anakiwa} className="colors__primary-anakiwa"/>
                  <img src={Dodgerblue} className="colors__primary-dodgerblue"/>
               </div>
               <div className="colors__secondary">
                  <span className="colors__secondary-secondary">Secondary</span>
                  <span className="colors__secondary-hotcinnamon-code">#DC6B1B</span>
                  <span className="colors__secondary-atomictangerine-code">#FF9D58</span>
                  <img src={Hotcinnamon} className="colors__secondary-hotcinnamon"/>
                  <img src={Atomictangerine} className="colors__secondary-atomictangerine"/>
               </div>
            </div>
         </div>
    </div>
   )
}

export default Typography