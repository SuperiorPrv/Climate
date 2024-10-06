import img from "./images/image.png"

const About = () => {
  return (
    <div style={{padding:"30px"}}>
      <img style={{backgroundSize:"cover", backgroundPosition:"center", maxWidth:"100%"}} src={img} alt="" />
    </div>
  )
}

export default About