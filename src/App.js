import "./index.css";

const App = () => {
  return (
    <div className='app'>
      <section className='search-section'>
        <p>
          Start with a detailed description{" "}
          <span className='surprise'>Surprise me</span>
        </p>
        <div className='input-container'>
          <input
            type='text'
            placeholder='An impressionist oil paintining of a sunflower i a purple vase...'
          />
          <button>Generate</button>
        </div>
      </section>
      <section className='image-section'></section>
    </div>
  );
};

export default App;
