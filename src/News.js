
import React, {useState} from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {List } from 'semantic-ui-react'
import latest from "./img/latest.jpg"
import relete from "./img/relete.jpg"






const modifiers = {
  highlighted: new Date(2020, 11, 2),
};




function News(){

 
  const birthdayStyle = `.DayPicker-Day--highlighted {
    background-color: orange;
    color: white;
  }`;



  const modifiers = {
    highlighted: new Date(2020, 10, 2),
  };



    return(
        <div className="fan">

<img style={{position:"absolute", height:558}}
 className="d-block w-100"           
            src={relete}
            
          />


<h1 style={{paddingLeft:100, fontSize:50, paddingTop:10, position:"relative", color:"white"}}>News & Events</h1>




<div style={{flexDirection:"row", display:"flex"}}>

<div style={{paddingLeft:100}}>

<h3 style={{paddingLeft:0, marginTop:40, position:"relative", color:"white"}}><u>Academic Calendar</u></h3>

<style>{birthdayStyle}</style>

<DayPicker  modifiers={modifiers} month={new Date(2020, 9)}   />

</div>


<div style={{flexDirection:"column", display:"flex", paddingLeft:120, marginRight:40}}>
<h3 style={{ marginTop:40, position:"relative", color:"white"}}> <u>News</u></h3>

<h5 style={{position:"relative"}}>Resumption of students for 1st term</h5>
<h6 style={{position:"relative"}}>2nd November, 2020</h6>
<p style={{position:"relative"}}> Dear Parents due to the ongoing curfew in Lagos State, The school will continues its academic session on the 2nd of November 2020. For more info contact the school. </p>

<br/>


<h5 style={{position:"relative"}}>Little Rock Online classes</h5>
<h6 style={{position:"relative"}}>through-out November, 2020</h6>
<p style={{position:"relative"}}> The little rock school online class sessions are geared towards teaching your child from the comfort of their home, various learning materials will be provided such as documents, videos etc. </p>

</div>




<div style={{flexDirection:"column",display:"flex", marginLeft:28, marginRight:150}}>
<h3 style={{marginTop:40,position:"relative",color:"white"}}> <u>Notice Board</u>  </h3>
<h5 style={{position:"relative"}}>First Terminal Examination extension</h5>
<p  style={{position:"relative"}}>Due to the various academic delays resulting from the lockdown and curfew, the first term exams will be extended and a new date for the proposed exams will be fixed.</p>


<br/>


<h3 style={{position:"relative",color:"white"}}> <u>Announcement</u> </h3>
<h6  style={{position:"relative"}}>All Staff and Pupils are required to have a facemask/face shield to gain entry into school premises.</h6>
</div>



</div>





            
 


            <p className="lamb" style={{marginTop:150}}> Powered by The August Tech
            <br/>
            <List className="nub" bulleted horizontal link>
    <List.Item as='a'>Terms and Conditions</List.Item>
    <List.Item as='a'>Privacy Policy</List.Item>
    <List.Item as='a'>Contact Us</List.Item>
  </List>
            </p>
         
            

                  




</div>




)
    }

export default News