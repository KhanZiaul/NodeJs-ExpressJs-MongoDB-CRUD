import { Link, useLoaderData } from "react-router-dom";
import Coffes from "./components/Coffes";
import { useState } from "react";

const App = () => {
  const datas = useLoaderData()
  const [coffes,setCoffes] = useState(datas)
  return (
    <div className="my-7">
      <h2 className='text-5xl text-center my-6'>Coffes</h2>
      <Link to='/addCoffe'>
        <button className="btn btn-primary bg-black block mx-auto my-6">Add COFFE</button>
      </Link>
      <div className="grid grid-cols-2 gap-5">
        {
          coffes?.map(coffe => <Coffes key={coffe._id} coffe={coffe} setCoffes={setCoffes} coffes={coffes}></Coffes>)
        }
      </div>
    </div>
  );
};

export default App;
