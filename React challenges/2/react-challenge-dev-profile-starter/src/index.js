import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
function App() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
    
      </div>
    </div>
  );
}

function Avatar(){
  return(
     <div className="avatar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1Dqa50tho_ekjUWaxlhBMlPfvE_4mlUgWg&usqp=CAU " alt="icon"/>
     </div>
    
  )
      
  
}

function Intro(){
  return(
    <div>
      <h1>Kapil</h1>
      <p>Professional frontend developer</p>
    </div>
  )
}

function SkillList(){
  return(
    <div className="skill-list">
       {
         skills.map((skill)=>(
           <Skill s={skill.skill} l={skill.level} c={skill.color} />
         ))
       }
    </div>
  )
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor:props.c}}>
         <span>{props.s}</span>
         {
           <span>
              {props.l==="advanced"&&"💪"}
              {props.l === "beginner" && "👶"}
        {props.l=== "intermediate" && "👍"}
           </span>
         }
    </div>
  
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
