import React from 'react'
import { Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Segment, Image } from 'semantic-ui-react'
import grad from "./Pics/grad.jpg"
import library from "./Pics/library.jpg"
import { List } from 'semantic-ui-react'
import Layout from "./Layout"
import ie from "./img/ie.jpg"
import he from "./img/he.jpg"
import ke from "./img/je.jpg"
import ce from "./img/ce.jpg"
import be from "./img/be.jpg"







function About() {


    return (



        <div className="life" >
        <img style={{position:"absolute", height:2119}}
            className="d-block w-100"
            src={be}
            
          />
<br/>
<h1 className="mb" style={{position:"relative", left:100, color:"white"}}>About Us</h1>
<br/>

<Layout>
<Segment className="mine">
<Header as='h2'>The Little Rock History</Header>
    <Image src={grad} size='small' floated='left' />
    <p>
      Little Rock School was founded in 2005 as a progressive alternative to the more rigid and authoritarian and educational systems of the time. We have continued on this progressive path, adopting many innovative programs well before their common acceptance in Nigerian education.
    </p>
    <Image src={library} size='small' floated='right' />
    <p>
      We encourage students and staff to act systematically in the learning process and to form relationships based on mutual respect. Intrinsic to our philosophy is a profound respect for the individual and a rejection of conformity for its own sake. Each student is encouraged to think creatively, independently and critically, and to understand his or her responsibility to the larger world.
    </p>
    <p>
      While our style is informal, our curriculum is rigorous and prepares students for success at a range of high schools according to their best fit, including the most selective schools in the nation.
    </p>
  </Segment>
  <br/>
  




  <Segment>
  <Header className="paf" as='h2'>Our Mission</Header>
    <Image src={he} size='small' floated='right' />
    <p>
      Our mission is to provide a safe haven where everyone is valued and respected. All staff members, in partnership with parents and families are fully committed to students’ readiness. Students are empowered to meet current and future challenges to develop social awareness, civic responsibility, and personal growth.
    </p>
    <Image src={ce} size='small' floated='left' />
    <p>
     We are dedicated to a continuing tradition of excellence in an ever-changing world. Within a safe and supportive environment, we provide a relevant, high-quality education and prepare our diverse student body for future endeavors. We honor achievement and promote pride in ourselves, in our school, and in our community.
    </p>
    <p>
      We strive to prepare all students to become lifelong learners and responsible citizens ready to meet the challenges of the future. In partnership with families and community, our goal is to create relevant learning opportunities for students — both inside and outside the classroom — that help them develop the knowledge, critical thinking skills, and character necessary to succeed in a technologically advanced world.
    </p>
  </Segment>
  <br/>
  




  <Segment>
  <Header as='h2'>Our Vision</Header>
    <Image src={ie} size='small' floated='left' />
    <p>
      Our vision is to forge strong, positive connections with students so they can achieve independence, build confidence, and gain academic knowledge.
      We aim to develop well-rounded and thoughtful students prepared to cope with a changing post-modern and globalized world.
    </p>
    <Image src={ke} size='small' floated='right' />
    <p>
      We are committed to recognizing the importance of communication and to encouraging dialogue among all constituencies; to promoting intellectual and social growth and development within the school community; to providing a safe, supportive setting so that students have the opportunity to explore and to clarify their own beliefs and values, to take risks, and to think and speak for themselves; and to recognizing and responding to individual and institutional prejudices, both overt and subtle, based on gender, religion, ethnicity, socio-economic status, age, and physical and mental ability.
    </p>
    <p>
      Our vision is to prepare and motivate our students for a rapidly changing world by instilling in them critical thinking skills, a global perspective, and a respect for core values of honesty, loyalty, perseverance, and compassion. Students will succeed today and be prepared for tomorrow.
    </p>
  </Segment>
  </Layout>
            




















            <br/>
             <Container text className="enjoy" style={{position:"relative", paddingTop:30}}>
    <Header as='h2'>Letter from our board of directors</Header>
    <p style={{color:"white"}}>
    Dear parents/Guardians<br/>
    I would like to welcome you to our school website. It is designed to give you a glimpse of our school and is packed with information that you as parents and carers will need to know. The website has information on all the aspects of our school including Safeguarding, admissions criteria, times of the school day, school uniform and before and after school care. 

At little rock schools, we have a very strong vision which forms a fundamental part of how we move the school forward and we have nine values which underpin this vision. Our vision was written with input from all our school staff and our school head office. Our school has a very dedicated team of staff who work exceptionally hard to ensure each child achieves their best, they are fully supported by the members of our Governing Body.
    </p>
    <p style={{color:"white"}}>
    Meetings for prospective parents who would like to learn more about our school are held several times during the year. Please contact the school office if you would like to attend one. We hold them for our prospective parents.
    </p>
    <p style={{color:"white"}}>
    As a primary school, we believe that young children learn best when they are stimulated by an exciting and challenging curriculum which motivates them to learn. Our ethos is that we actively encourage children to be inquisitive about the world around them and we celebrate every child’s success. Our aim is to create a lifelong love of learning in every child. Our school motto is<i> ‘We prepare are children for the future.’</i> 
    </p>
    <p style={{color:"white"}}>
    At little rock school we have high expectations of all our children both in terms of behaviour and learning. Lessons are planned according to the variety of abilities within each class. Teachers use a range of teaching styles to ensure all children are actively involved and engaged in lessons and aim for every child to achieve their full potential.
    </p>
    <p style={{color:"white"}}>
    As a school, we greatly value the views of the school community and throughout the year provide opportunities for both children and parents to contribute their ideas which we then use to plan for the future of the school. Each class has two class assistants who meet with the Head teacher to discuss their ideas about safety, choosing which charities the school should support and how to become a better<i> ‘Eco school’</i>.
    </p>
    <p style={{color:"white"}}>
    Little Rock Nursery & Primary Schools provides a happy, welcoming and caring environment for children throughout the years they are with us.
    </p>
    <p style={{color:"white"}}>
    I look forward to meeting you during the year.
    </p>
    <br/>
    <br/>
    <p style={{color:"white"}}>Mr I.B Okafor & Mrs Ify Okafor.</p>
    
<p style={{color:"white"}}>Chairman & Administrator of Little Rock Schools.</p>
  </Container>

  <br/>
            <hr/>
            <p className="lamb">Created & Designed by The August Tech
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

export default About
