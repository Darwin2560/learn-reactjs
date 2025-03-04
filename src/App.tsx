import Navbar from './components/Navbar';
import List from './components/List';

function App() {
  const arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

  return (
    <div>
      <Navbar />
      {arr.map((item) => {
        return <List item={item} />
      })}
    </div>
  )
}

export default App
