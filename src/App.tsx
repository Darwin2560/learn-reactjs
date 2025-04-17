import Navbar from './components/Navbar';
import List from './components/List';
import { Places } from './data/Places';
import { Card } from './components/Card/Card';

function App() {
  const arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

  return (
    // <div>
    //   <Navbar />
    //   {arr.map((item) => {
    //     return <List item={item} />
    //   })}
    // </div>
    <div className="cards">
      {
        Places.map((place) => (
          <Card key={place.id} image={place.image} title={place.title} author={place.author} />
        ))
      }
    </div>
  )
}

export default App
