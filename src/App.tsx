import Navbar from './components/Navbar';
import List from './components/List';
import { Places } from './data/Places';
import { Card } from './components/Card/Card';
import { useState } from 'react';
import { Title } from './components/Title/Title';

function App() {
  const [toggle, setToggle] = useState(false)
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
      toggle? <Title headline={"This is TRUE"} />:
              <Title headline={"This is FALSE"}/>
      }
      {
        Places.map((place) => (
          <Card key={place.id} image={place.image} title={place.title} author={place.author} />
        ))
      }
    </div>
  )
}

export default App
