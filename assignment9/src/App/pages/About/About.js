import Card from '../../components/Cards/cards'
import './About.css';
function About() {
  const cardsData = [
    { title: 'About Us', description: 'This is a page for INFO6150' },
    { title: 'Done by', description: 'Sreedhar.sh@northeastern.edu' },
  ];

  return (
    <div className='container'>About
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    
  )
}

export default About