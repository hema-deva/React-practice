
import './App.css';
import { DebounceThrottle } from './component/DebounceThrottle';
import { ToggleSwitch } from './component/ToggleSwitch';
import { ToDoList } from './component/ToDoList';
import { ApiFetch } from './component/ApiFetch';
import { Searchbar } from './component/Searchbar';
import { DropdownMenu } from './component/DropdownMenu';
import { Tabs } from './component/Tabs';
import { Pagination } from './component/Pagination/Pagination';
import { ExampleCustomHooks } from './component/CustomHook/ExmapleCustomHooks';
import { DropdownMulti } from './component/dropdownMulti';
import { RadioButtons } from './component/RadioButtons';
import { Checkboxes } from './component/Checkboxes';
import { ThemeData } from './component/UseContext/ThemeData';
import { UseProvider } from './component/UseContext/UseContextHook';
import { LocalStorage } from './component/LocalStorage/LocalStraoge';
// For React with JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {   
     
  return (
    <div className="App">
      {/* <UseProvider> */}
        {/* <DebounceThrottle/>
      <ToggleSwitch/><br/>
      <ToDoList/>
      <ApiFetch url={"https://jsonplaceholder.typicode.com/users"}/>
      <Searchbar/>
      <DropdownMenu/>
      <Tabs/> */}
      {/* <Pagination/> */}
      {/* <ExampleCustomHooks/><br/>
      <DropdownMulti/><br/>
      <RadioButtons/><br/> */}
      {/* <Checkboxes/>
      <ThemeData/>
      <LocalStorage/>
      </UseProvider> */}
      {/* <ToggleSwitch/> */}
      <DropdownMenu/>
    </div>
  );
}

export default App;
