import './card.css'
import { useState } from 'react'

function Card({
    icon = '',
    name = '',
    description = '',
    is_active =  false
}) {
    const [isActive, setIsActive] = useState(is_active)

    return (
        <div className="card">
            <div className="content">
                <img src={icon} alt="Icon" />

                <div className='text'>
                    <strong>{name}</strong>
                    <br />
                    <p>{description}</p>
                </div>
            </div>

            <div className="options">
                <button>
                    Remove
                </button>

                <div 
                className={`check ${isActive ? 'check_container_checked' : 'check_container__not_checked'}`}
                tabIndex='0'>
                    <input type="checkbox" id="check" onClick={() => setIsActive(!isActive)} />
                    <label htmlFor="check" className={isActive ? 'label_checked' : 'label_not_checked'}></label>
                </div>
            </div>
        </div>
    )
}

export default Card 