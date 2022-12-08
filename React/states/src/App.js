import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Hi!");
  const [age, setAge] = useState(23);
  const [randoms, setRandom] = useState(["xyz", "yxz"]);
  const [secondRandom, setSecondRandom] = useState({titleOne: "asd", titleTwo: "fgh"});


  /* Input Example */

  const [form, setForm] = useState({name: "", surname: ""});

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div className="App">
      <h1> { name } </h1>
      <h2> { age } </h2>
      <button onClick={() => setName("Hi")}>Click</button>
      <button onClick={() => setAge(21)}>Second Click</button>
      <hr />

      {randoms.map((random, index) => (
        <div key={index}>{random}</div>
      ))}

      <button onClick={() => setRandom([...randoms, "fgh"])}></button>

      <hr />

      <button onClick={() => setSecondRandom({...secondRandom, titleOne: "sssss"})}></button> 
      {/* <button onClick={() => setSecondRandom({titleOne: rty, titleTwo: iop})}></button>  */}

      <hr />

      <input  name='name' value={form.name} onChange={onChangeInput} />

      <br></br>

      <input name='name' value={form.name} onChange={onChangeInput} />

      {form.name} {form.surname}

    </div>
  );
}

export default App;
