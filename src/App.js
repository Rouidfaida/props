import "bootstrap/dist/css/bootstrap.min.css";
import Footerim from "./Components/Footerim";

import ItemsList from "./Components/ItemsList";
import NaveBare from "./Components/NaveBare";

function App() {
  const itemArray = [
    {
      name: "Iphone 11",
      imgSrc:
        " https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png",

      price: "1 349,99 $",
    },
    {
      name: "Razer Blade",
      imgSrc:
        "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
      price: "7 633,64 $",
    },
    {
      name: "Iphone 11",
      imgSrc:
        " https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png",

      price: "1 349,99 $",
    },
    {
      name: "Razer Blade",
      imgSrc:
        "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
      price: "7 633,64 $",
    },
  ];
  const handleClick=(x,y)=>
  {
    alert(`the price of ${x} is ${y}`)}
  
  return (
    <div className="App">
      <NaveBare />
      <ItemsList listeproduit={itemArray} click={handleClick} />
      <Footerim ch={"this is normal props"}>
          <h1>this is children</h1>
          <h2>my propst</h2>
      </Footerim>
      
    </div>
  );
}

export default App;
