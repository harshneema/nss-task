import React from "react";
import './home.css'
import { useState } from "react";
import food from './food.json'
import Slider from 'react-slick'
import Modal from '../Modal/modal.js'
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { AiFillClockCircle , AiFillHeart , AiFillMessage} from "react-icons/ai";
import ScrollAnimation from 'react-animate-on-scroll';




const Home = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    //   };
    const [Focus, setFocus] = useState('Appetizers')
    const [Id , setId] = useState(null)
    const [Open , setOpen ] = useState(false)
    const desserts = food.slice(0,4) ;
    return(
        <div>
            <ScrollAnimation animateIn="fadeIn">
        <div className="nav-category"> 
            {Focus === 'Appetizers' ? (<h2 style={{ "textDecorationLine":"underline"}}>Appetizers </h2>) : (<h2 onClick={() => setFocus('Appetizers')}>Appetizers</h2>) }
            {Focus === 'Entries' ? (<h2 style={{ "textDecorationLine":"underline"}}>Entries</h2>) : (<h2 onClick={() => setFocus('Entries')}>Entries</h2>) }
            {Focus === 'Desserts' ? (<h2 style={{ "textDecorationLine":"underline"}}>Desserts</h2>) : (<h2 onClick={() => setFocus('Desserts')}>Desserts</h2>) }   
         </div>
         </ScrollAnimation>
        
        <div className="Main">
            {Focus === 'Appetizers' ? (
            <div>
            <ScrollAnimation animateIn="fadeIn">
               <Slider infinite={true} slidesToShow={3} centerMode={true} variableWidth={true}>
                {food.map((food,i) => (
                     <div className="card">
                        <div> <img src={food.url} alt="" /> </div>
                        <h1 className="name" id={food.id} onClick={(e)=>{setOpen(!Open) ; setId(e.currentTarget.id - 1) }}>{food.Name}</h1>
                        <div className="likes">
                               <span> <AiFillClockCircle/> {food.time}</span>
                               <span> <AiFillHeart/> 200</span>
                               <span> <AiFillMessage/> 400</span> 
                        </div>
                        <p className="description">
                            {food.Description}
                        </p>
                     </div>
                ))}
                </Slider>
                </ScrollAnimation>
            </div> ) :
            Focus === 'Entries' ? (
                <div>
               
                <Slider infinite={true} slidesToShow={3} centerMode={true} variableWidth={true}>
                 {desserts.map((food,i) => (
                      <div className="card">
                      <div> <img src={food.url} alt="" /> </div>
                      <h1 className="name" id={food.id} onClick={(e)=>{setOpen(!Open) ; setId(e.currentTarget.id - 1) }}>{food.Name}</h1>
                      <div className="likes">
                             <span> <AiFillClockCircle/> {food.time}</span>
                             <span> <AiFillHeart/> 200</span>
                             <span> <AiFillMessage/> 400</span> 
                      </div>
                      <p className="description">
                          {food.Description}
                      </p>
                   </div>
                 ))}
                 
                 </Slider>
             </div>) :
            (<div>
               
                <Slider infinite={true} slidesToShow={3} centerMode={true} variableWidth={true}>
                 {desserts.map((food,i) => (
                     <div className="card">
                     <div> <img src={food.url} alt="" /> </div>
                     <h1 className="name" id={food.id} onClick={(e)=>{setOpen(!Open) ; setId(e.currentTarget.id - 1) }}>{food.Name}</h1>
                     <div className="likes">
                            <span> <AiFillClockCircle/> {food.time}</span>
                            <span> <AiFillHeart/> 200</span>
                            <span> <AiFillMessage/> 400</span> 
                     </div>
                     <p className="description">
                         {food.Description}
                     </p>
                  </div>
                 ))}
                 
                 </Slider>
             </div> )
             }
        </div> 
                    
                    {Open ? ( <Modal open={Id} func={Open}/>  ) : <div></div>}
        </div>
    );
};

export default Home;