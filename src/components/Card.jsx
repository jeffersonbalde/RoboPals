
const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5 card'>
      <img alt='robots' src={`https://robohash.org/${id}`} className='robots'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;