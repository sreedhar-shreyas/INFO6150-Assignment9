import Card from '../../components/Cards/cards'


function Jobs() {
  const cardsData = [
    { title: 'Our Career Page', description: 'Thank you for coming back, we will hire soon' },
 
  ];

  return (
    <div className='container'>
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    
  )
}

export default Jobs