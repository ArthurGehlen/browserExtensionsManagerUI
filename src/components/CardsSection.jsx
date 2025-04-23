// Hooks
import { useEffect, useState } from "react"

// Components
import Card from "./Card"

function CardsSection({ type }) {
    const [data, setData] = useState([])

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
        <section className="cards_section">
            {type === 'All' && data.length !== 0 && data.map((card) => (
                <Card
                    key={card.name}
                    icon={card.logo}
                    name={card.name}
                    description={card.description}
                    is_active={card.isActive}
                />
            ))}
            {type === 'Active' && data.length !== 0 && data.filter(card => card.isActive).map((card) => (
                <Card
                    key={card.name}
                    icon={card.logo}
                    name={card.name}
                    description={card.description}
                    is_active={card.isActive}
                />
            ))}
            {type === 'Inactive' && data.length !== 0 && data.filter(card => !card.isActive).map((card) => (
                <Card
                    key={card.name}
                    icon={card.logo}
                    name={card.name}
                    description={card.description}
                    is_active={card.isActive}
                />
            ))} *
        </section>
    )
}

export default CardsSection
