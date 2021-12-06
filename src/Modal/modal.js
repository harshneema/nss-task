import React , {useState} from "react";
import './modal.css'
import food from '../Home/food.json'
import { AiOutlineCloseCircle , AiFillShopping , AiFillMessage} from "react-icons/ai";
import { GiChefToque } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const Modal = (props) => {
    const [Open1, setOpen1] = useState(true)
    const [Comment, setComment] = useState(null)
    const [Comment2, setComment2] = useState('')
    console.log(Comment);
    return (
      Open1 &&  (
     <div>
      <div className="Modal">
          <h2 onClick={()=> setOpen1(!Open1)} className="close"> <AiOutlineCloseCircle/></h2>
            <img src={food[props.open].url} alt="" />
            <h2 style={{"color": "aliceblue" , "fontSize" : "3ch"}}> {food[props.open].Name} </h2>
            <p>{food[props.open].Description}</p>
            <br/>
            <AiFillShopping/>
            <h3>Shopping List </h3>
            <p> {food[props.open].Description} </p>
            <br/>
            <GiChefToque/>
            <h3> Preparations </h3>
            <ul style={{"padding":"20px"}}>
                <li> {food[props.open].Description}  </li>
                <li> {food[props.open].Description}  </li>
                <li> {food[props.open].Description}  </li>
            </ul>
            <div className="cmthead">
                <h3> Comments </h3>
                <div className="profile1"><CgProfile/> Harry Truman </div>
                <div className="date">02/11/17</div>
                <br/><br/>
                <div className="cmt">{food[props.open].Description}</div>
                <div>{Comment}</div>
                <input className="addcmt" type="text" onChange={(e) => {  setComment2(e.target.value);}} /> 
                <button onClick={() => setComment(Comment2)}> <AiFillMessage/></button>
                
            </div>
        </div>
        <div className="blur">/</div>
     </div> ) 
    )
}

export default Modal