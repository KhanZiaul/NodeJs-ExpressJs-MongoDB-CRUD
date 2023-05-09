import { useLoaderData } from "react-router-dom";
import Coffes from "./components/Coffes";

const App = () => {
  const coffes = useLoaderData()

  return (
    <div>
      <h2 className='text-5xl text-center my-6'>Coffes</h2>
      <div>
        {
          coffes?.map(coffe => <Coffes key={coffe._id} coffe={coffe} ></Coffes>)
        }
      </div>
    </div>
  );
};

export default App;
