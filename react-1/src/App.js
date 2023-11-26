import './App.css';
import CheckboxLabels from './Components/CheckboxLabels';
import CheckboxesGroup from './Components/CheckboxesGroup';
import IconCheckboxes from './Components/IconCheckboxes';
import Menu from './Components/Menu';
import SizeCheckboxes from './Components/SizeCheckboxes';
import AlignItemsList from './Components/AlignItemsList';
import SwitchListSecondary from './Components/SwitchListSecondary';
import SimpleDialog from './Components/SimpleDialog';
import LinearWithValueLabel from './Components/LinearWithValueLabel';
import MediaCard from './Components/MediaCard';
function App() {
  return (
    <div className="App">
      <Menu/>
      <CheckboxLabels/>
      <SizeCheckboxes/>
      <CheckboxesGroup/>
      <IconCheckboxes/> 
      <AlignItemsList/>
      <SwitchListSecondary/>
      <SimpleDialog/>
      <LinearWithValueLabel/>
      <MediaCard/>
    </div>
  );
}

export default App;
