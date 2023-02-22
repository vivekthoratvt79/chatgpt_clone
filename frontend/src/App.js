import "./App.css";
import chatgpt from "./asset/openai-avatar.png";
import wit from "./asset/witai.avif";
import synthesia from "./asset/synthesia.svg";
import pd from "./asset/pd.png";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="jumbotron text-center">
          <h1 className="display-5">Multi-AI</h1>
        </div>
        <Cards
          key="chatgpt"
          logo={chatgpt}
          title="OpenAI - ChatGPT"
          desc="A model which interacts in a conversational way"
          rating={[1, 2, 3, 4, 5]}
          redirect="/chatgpt"
        />
        <Cards
          key="synthesia"
          logo={synthesia}
          title="Synthesia"
          desc="Create videos from plain text in minutes using Synthesia."
          rating={[1, 2, 3, 4]}
          redirect="/chatgpt"
        />
        <Cards
          key="wit"
          logo={wit}
          title="Wit.AI"
          desc="Enable people to interact with your products using voice and text."
          rating={[1, 2, 3]}
          redirect="/chatgpt"
        />
        <Cards
          key="paralleldots"
          logo={pd}
          title="ParallelDots"
          desc="It uses Computer Vision to analyse images of retail shelf displays that generates perfect store KPI insights in real-time"
          rating={[1, 2, 3, 4]}
          redirect="/chatgpt"
        />
      </div>
    </div>
  );
}

export default App;
