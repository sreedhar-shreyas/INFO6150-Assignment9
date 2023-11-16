import Card from '../../components/Cards/cards'


function Contact() {
  const cardsData = [
    { title: 'Contact Us', description: 'Please contanct us INFO6150' },
    { title: 'Via email', description: 'suuport@test.com' },
  ];

  return (
    <div className='container'>Contact
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    
  )
}

export default Contact