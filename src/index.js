import React from 'react';
import ReactDOM from 'react-dom/client';



const myName = "My name is Maks";
const greetings = "Ласкаво просимо до нашого сайту!";
const imgURL = "https://voca-land.sgp1.cdn.digitaloceanspaces.com/0/1757653231113/bcc40fc1.jpg"
const renderObject = {web_name: "YouTube", web_url: "https://www.youtube.com/?app=desktop&gl=UA&hl=uk"}
const a = 10492439;
const b = 8450343890;
const sum = a + b;
const arrayColors = ["Green", "Red", "Blue"];

const RenderName = ()=>{
  return(
    <div>
     <h1>{myName}</h1>
     <p>{greetings}</p>
    </div>
  )
}

const ImgRender = () => <img src={imgURL}></img>

const ObjectRender = () => {
  return (
    <>
      <p>My favourite web-site is {renderObject.web_name}</p>
      <a href={renderObject.web_url}></a>
    </>
  )
}

const NumbersReneder = () => <p>Sum of {a} and {b} is {sum}</p>

const ColorsRender = ({colors}) =>{
  return(
    <ul>
    {colors.map((color, index)=>(
      <li key={index}>{color}</li>
    ))}
  </ul>
  )
  
}

const App = () =>{
  return(
    <div>
      <RenderName></RenderName>
      <ImgRender></ImgRender>
      <ObjectRender></ObjectRender>
      <NumbersReneder></NumbersReneder>
      <ColorsRender colors={arrayColors}></ColorsRender>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

//ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
  //<App/>
//</React.StrictMode>) - метод который позволяет рендерить елемент