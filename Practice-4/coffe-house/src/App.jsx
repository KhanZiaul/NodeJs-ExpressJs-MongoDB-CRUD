import { useLoaderData } from "react-router-dom";
import Coffes from "./components/Coffes";

const App = () => {
  const coffes = useLoaderData()
  return (
    <div className="my-7">
      <h2 className='text-5xl text-center my-6'>Coffes</h2>
      <div className="grid grid-cols-2 gap-5">
        {
          coffes?.map(coffe => <Coffes key={coffe._id} coffe={coffe} ></Coffes>)
        }
      </div>
    </div>
  );
};

export default App;
