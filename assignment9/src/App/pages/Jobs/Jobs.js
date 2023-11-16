import Card from '../../components/Cards/cards'
import Navbar from '../../components/Navbar/Navbar';


function Jobs() {
  const cardsData = [
    { title: 'Our Career Page', description: 'Thank you for coming back, we will hire soon' },
 
  ];

  return (
    <div>
    <Navbar/>
    <div className='container'>
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    </div>
    
  )
}

export default Jobs