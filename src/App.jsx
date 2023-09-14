
import './App.css';
import Card from './Card.jsx';

function App() {
  const cardInfo = [
    {
      title: "Creepin with a Friend",
      imageUrl: "https://images.unsplash.com/photo-1603388074096-41a3ae655f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
      description: "Here is a description."
    },
    {
      title: "Howl-oween is here",
      imageUrl: "https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2488&q=80",
      description: "Spooky puppy description."
    },
    {
      title: "Plans Fell Through",
      imageUrl: "https://images.unsplash.com/photo-1635442021460-f6ebd6eb9427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2551&q=80",
      description: "Nothing spookier than a last minute cancellation."
    }
  ]

  return (
    <div className="App">
      <div className="card-container">
        {cardInfo.map(({ title, imageUrl, description }, index) =>
        (<Card
          key={index}
          title={title}
          imageUrl={imageUrl}
          description={description}
        />
        ))}
      </div>
    </div>
  );
}

export default App;