import Card from '../../components/Cards/cards'
import './Home.css'

function Home() {
  const cardsData = [
    { title: 'WELCOME HOME', description: 'Thank you for coming back' },
 
  ];

  return (
    <div className='container'>
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    
  )
}

export default Home