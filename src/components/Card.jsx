
const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' key={props.id}>
            <img alt='robots' src={`https://robohash.org/${props.id}`} className='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
                <p>{props.username}</p>
            </div>
        </div>
    )
}

export default Card