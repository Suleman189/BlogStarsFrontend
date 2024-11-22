import StarCard from './StarCard';

function Home(props) {
  return (
    <div className="container">
      <div className="row g-4">
        {Array.from({ length: 10 }, (s, i) => {
          return <StarCard key={i + 1} />;
        })}
      </div>
    </div>
  );
}

export default Home;
