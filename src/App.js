import BlueButton from './Component/BlueButton';
import Condition from './Component/Condition';
import Conditional from './Component/Conditional';
import ControlledForm from './Component/ControlledForm';
import Counter from './Component/Counter';
import CounterWithState from './Component/CounterWithState';
import GreenButton from './Component/GreenButton';
import ListArray from './Component/ListArray';
import ListData from './Component/ListData';
import ListDataObject from './Component/ListDataObject';
import ListObject from './Component/ListObject';
import ListObjectConditional from './Component/ListObjectConditional';
import Rendering from './Component/Rendering';
import Table from './Component/Table';
import UncontrolledForm from './Component/UncontrolledComponent';

function App() {
  // function info() {
  //   alert('Lorem ipsum')
  // }

  const info = () => {
    alert('Lorem ipsum')
  }
  return (
    <div>
        {/* <Rendering />
        <Conditional />
        <ListArray />
        <ListObject />      
        <ListObjectConditional />
        <Table />
        <BlueButton onCustomClick={info} caption='Tampilkan' /> */}
      {/* <Counter /> */}
      {/* <ListObject /> */}
      {/* <Rendering /> */}
      {/* <Condition /> */}
      {/* <ListData /> */}

      {/* <UncontrolledForm /> */}
      <ControlledForm />
    </div>
  );
}

export default App;
