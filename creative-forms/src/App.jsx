import { useEffect, useState } from "react";
import ColourItems from "./components/ColourItems";
import "./styles/App.css";
import DrawerComp from "./components/DrawerComp";
import CreativesList from "./components/CreativesList";
import SearchInput from "./components/SearchInput";
import CreativesBar from "./components/CreativesBar";
import { fetchColors } from "./fetchHelper";
import { filteredCreatives } from "./helper";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [colors, setColors] = useState([]);
  const [creatives, setCreatives] = useState([]);
  const [filteredItem, setFilteredItem] = useState(creatives);
  const [searchItem, setSearchItem] = useState({ color: "", text: "" });
  const [formInput, setFormInput] = useState({ title: "", subtitle: "", color: "" });
  const creativesCount = creatives.length;
  const isFilterApplied = searchItem.color || searchItem.text;
  const creativesList = isFilterApplied ? filteredItem : creatives;



  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleColorInput = (color) => {
    setFormInput({ ...formInput, color });
  };

  const handleSubmit = () => {
    const newCreative = {
      title: formInput.title,
      subtitle: formInput.subtitle,
      color: formInput.color,
    };

    setCreatives([...creatives, newCreative]);
    setFormInput({
      title: "",
      subtitle: "",
      color: "",
    });
    toggleDrawer();
  };

  const onColorSelect = (color) => {
    setSearchItem({ ...searchItem, color });
  };

  const handleSearchText = (e) => {
    setSearchItem({ ...searchItem, text: e.target.value });
  };

  useEffect(() => {
    if (isFilterApplied) {
      setFilteredItem(filteredCreatives(searchItem, creatives));
    }
  }, [searchItem]);

  useEffect(() => {
    fetchColors(setColors);
  }, []);

  return (
    <div className="container">
      <h3>Filter By:</h3>
      <div className="filter-items">
        <ColourItems colors={colors} onSelect={onColorSelect} />
        <SearchInput searchItem={searchItem} handleSearchText={handleSearchText} />
      </div>
      <CreativesBar creativesCount={creativesCount}/>
      <button
        onClick={toggleDrawer}
        disabled={isDrawerOpen || creativesCount === 5}
        className="add-creative-btn"
      >
        + Add Creative
      </button>
      {isDrawerOpen && (
        <DrawerComp
          toggleDrawer={toggleDrawer}
          colors={colors}
          handleInput={handleInput}
          handleColorInput={handleColorInput}
          formInput={formInput}
          handleSubmit={handleSubmit}
        />
      )}
      <CreativesList creatives={creativesList} />
    </div>
  );
}

export default App;
