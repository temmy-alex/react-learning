import BlueButton from './Component/BlueButton';
import Conditional from './Component/Conditional';
import Counter from './Component/Counter';
import ListArray from './Component/ListArray';
import ListObject from './Component/ListObject';
import ListObjectConditional from './Component/ListObjectConditional';
import Rendering from './Component/Rendering';
import Table from './Component/Table';

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
      <Counter />
    </div>
  );
}

export default App;
