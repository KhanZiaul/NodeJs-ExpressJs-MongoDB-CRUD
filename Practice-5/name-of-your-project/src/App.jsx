import React from 'react';

const App = () => {

  function formHandler(e) {
    e.preventDefault()

    const submitValue = e.target.submit.value;
    const radioValue = e.target.choose[0].checked;
    const radioValue2 = e.target.choose[1].checked;

    console.log(submitValue , radioValue , radioValue2)
  }

  return (
    <div>
      <h2 className='text-5xl text-center my-6'>This is input Field</h2>
      <form onSubmit={formHandler}>
        <select name='submit' className="select select-bordered w-full max-w-xs">
          <option disabled selected>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <div className='w-60'>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Red pill</span>
            <input type="radio" name="choose" className="radio checked:bg-red-500"  />
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Blue pill</span>
            <input type="radio" name="choose" className="radio checked:bg-blue-500"  />
          </label>
        </div>

        </div>

        <input className='btn btn-info' type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default App;