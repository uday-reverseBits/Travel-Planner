import './App.css'
import { Header } from './components/Header'
import { Entry } from './Entry'
import { Mock_Data } from './utils/mockData'


function App() {



  return (
    <>
      <Header />
      {Mock_Data.map((i) => (
        <Entry
          key={i.place}
          // img={i.img}
          // country_name={i.country_name}
          // place={i.place}
          // time={i.time}
          // about={i.about}
          entry={i}
        />
      ))}
    </>
  )
}

export default App
