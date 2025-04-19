// Components
import Header from './components/Header'
import Card from './components/Card'

// Utils
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [data, setData] = useState([])

  const handle_filter_click = (filter) => {
    setActiveFilter(filter)
  }

  useEffect(() => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json_data => {
        setData(json_data)
      })
  }, [])

  return (
    <>
      <Header />

      <main>
        <nav>
          <h1>
            Extensions List
          </h1>

          <div className="menu_options">
            <button
              className={activeFilter === 'All' ? 'active' : ''}
              onClick={() => handle_filter_click('All')}
            >
              All
            </button>
            <button
              className={activeFilter === 'Active' ? 'active' : ''}
              onClick={() => handle_filter_click('Active')}
            >
              Active
            </button>
            <button
              className={activeFilter === 'Inactive' ? 'active' : ''}
              onClick={() => handle_filter_click('Inactive')}
            >
              Inactive
            </button>
          </div>
        </nav>

        <section className='cards_section'>
          {data.length != 0 && data.map((card) => (
            <Card
              key={card.name}
              icon={card.logo}
              name={card.name}
              description={card.description}
              is_active={card.isActive}
            />
          ))}
        </section>
      </main>
    </>
  )
}

// Número de extensões = 12

// Bootstrap
{/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div> */}

export default App