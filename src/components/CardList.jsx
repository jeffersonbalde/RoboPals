
import Card from '../components/Card';

const CardList = ({robots}) => {

    const robotsArr = robots.map (robot  => 
            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} username={robot.username}/>
        )

    // Method 2
    // const robotsArr = robots.map((robot, i) => {
    //     return  <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username}/>
    // })
        
    return (
    <>
        {robotsArr}
    </>
    )
}

export default CardList