import BlueButton from './Component/BlueButton';
import Conditional from './Component/Conditional';
import ControlledForm from './Component/ControlledForm';
import Counter from './Component/Counter';
import FormInput from './Component/FormInput';
import FormMultiple from './Component/FormMultiple';
import FormValidation from './Component/FormValidation';
import ListArray from './Component/ListArray';
import ListData from './Component/ListData';
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
      {/* <Conditional /> */}
      {/* <ListData /> */}

      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      {/* <FormInput /> */}
      {/* <FormMultiple /> */}
      <FormValidation />
    </div>
  );
}

export default App;
