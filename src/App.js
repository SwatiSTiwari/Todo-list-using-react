import "./App.css";
import { useState } from "react";
import List from "./List";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    // console.log("current values", e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemsToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    // console.lof("list items", itemList);
    setCurrentItem("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemsToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
