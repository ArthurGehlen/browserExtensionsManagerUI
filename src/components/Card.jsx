import './card.css'

function Card({
    icon = '',
    name = '',
    description = '',
    is_active
}) {
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

                {is_active && <p>Teste</p>}
            </div>
        </div>
    )
}

export default Card 