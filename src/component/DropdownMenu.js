import { useState } from "react";
import { DropdownMulti } from "./dropdownMulti";
import { Tabs } from "./Tabs";
import { Pagination } from "./Pagination/Pagination";
import { DebounceThrottle } from "./DebounceThrottle";
import { ExampleCustomHooks } from "./CustomHook/ExmapleCustomHooks";
import { LocalStorage } from "./LocalStorage/LocalStraoge";
import { ToDoList } from "./ToDoList";
import { RadioButtons } from "./RadioButtons";
import { Checkboxes } from "./Checkboxes";
import { Searchbar } from "./Searchbar";
import { ApiFetch } from "./ApiFetch";
import { ToggleSwitch } from "./ToggleSwitch";

const componentMap = {
  ToggleSwitch, 
  ToDoList,
  DebounceThrottle,
  Pagination,
  DropdownMulti,
  RadioButtons,
  Checkboxes,
  ExampleCustomHooks,
  ApiFetch,
  Searchbar,
  LocalStorage,
  Tabs,
  DropdownMenu: null // to prevent recursion
};

    const menuData =[
      {
        "label": "Home",
        "component":"ToggleSwitch"
      },
  {
    "label": "UI Components",
    "items": [
      // { "label": "Toggle Switch", "component": "ToggleSwitch" },
      // { "label": "Dropdown Menu", "component": "DropdownMenu" },
      { "label": "Dropdown Multi", "component": "DropdownMulti" },
      { "label": "Tabs", "component": "Tabs" },
      { "label": "Pagination", "component": "Pagination" }
    ]
  },
  {
    "label": "Hooks & Utilities",
    "items": [
      { "label": "Debounce & Throttle", "component": "DebounceThrottle" },
      { "label": "Custom Hook Example", "component": "ExampleCustomHooks" },
      { "label": "Local Storage", "component": "LocalStorage" }
    ]
  },
  {
    "label": "Forms",
    "items": [
      { "label": "ToDo List", "component": "ToDoList" },
      { "label": "Radio Buttons", "component": "RadioButtons" },
      { "label": "Checkboxes", "component": "Checkboxes" },
      { "label": "Search Bar", "component": "Searchbar" }
    ]
  },
  {
    "label": "API & Context",
    "items": [
      { "label": "API Fetch", "component": "ApiFetch" },
    ]
  }
]
;
export const DropdownMenu = () => {
  const [selectedComponent, setSelectedComponent] = useState("ToggleSwitch");

  const SelectedComponent =
    selectedComponent && componentMap[selectedComponent]
      ? componentMap[selectedComponent]
      : null;

    const MenuItem = ({item}) => {
        const [open, setOpen] = useState(false);

        const handleSelect = (item,component) => {
          if(item.items) {
            setOpen(!open);
            setSelectedComponent(selectedComponent)
          } else {
          setSelectedComponent(component);
          }
        }
        return <>
            <li style={{position: "relative"}}>
                <div onClick={() => handleSelect(item ,item.component)} style={{padding:"10px",width:"150px",cursor:"pointer"}}>{item.label}</div>
                <div style={{position:"absolute"}}>{
                    open && item.items && item.items.map((subdata, index) => (
                        <div style={{paddingLeft:"10px",backgroundColor:"grey"}}>
                            <MenuItem key={index} item={subdata}/>
                        </div>
                    ))
                }</div>
            </li>
        </>
    }
    return <>
        <ul style={{listStyleType:"none",textAlign:"left", gap:"10px", display:"flex", justifyContent:"space-between", backgroundColor: "grey"}}>
        {
           menuData.map((data,index) =>(
            <MenuItem key={index} item={data}/>
           ))
        }
        </ul>  

        <div style={{ flex: 1, padding: "20px", textAlign: "left" }}>
        {SelectedComponent ? (
          <div>
            <h3 style={{ marginBottom: "15px" }}>🧩 {selectedComponent}</h3>
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)"
              }}
            >
             <SelectedComponent/>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
}