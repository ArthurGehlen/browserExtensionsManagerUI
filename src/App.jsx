// Components
import Header from './components/Header'
import Card from './components/Card'
import CardsSection from './components/CardsSection'

// Utils
import { useState } from 'react'
import './App.css'

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const handle_filter_click = (filter) => {
    setActiveFilter(filter)
  }

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

        <CardsSection type={activeFilter} />
      </main>
    </>
  )
}

export default App