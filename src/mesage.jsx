import 'message.css'
// 3) შექმენით Message კომპონენტი ცალკე Message.jsx ფაილში რომელსაც App.jsx-ში გამოიყენებთ, ამ კომპონენტისთვის ცალკე აიღეთ Message.modules.css ფაილი რომელშიც რაიმე კლასს შემოიტანთ რითაც გასტილავთ პარაგრაფს, დააიმპორტეთ ეს css ფაილი შესაბამის კომპონენტთან styles სახელით და გასტილეთ პარაგრაფი styles.კლასით. კომენტარებით დაწერეთ ოთხივე გასტილვის ხერხზე: inline, object variable, stylesheet, modular css
const style={
  backgroundColor: 'lightgreen',
  color: 'darkgreen'
}
export default function Mesage() {
  return (
    <div>
      <h1>Hello from Mesage component!</h1>
      <h1 style={style}>hello work</h1>
      <h1 style={{color:'green'}}></h1>
      
    </div>
  )
}