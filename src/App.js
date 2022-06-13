import {useState} from 'react';

function App() {
  const [personRegistrationOutput, setPersonRegisttrationOutput] = useState('');

  const generatePhysical = () => {
    fetch('https://person-registration-api.herokuapp.com/?kind=physical', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(person => {
          setPersonRegisttrationOutput(person.data);
        });
  };

  const generateJuridic = () => {
    fetch('https://person-registration-api.herokuapp.com/?kind=juridic', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(person => {
          setPersonRegisttrationOutput(person.data);
        });
  };

  const generateGeneral = () => {
    fetch('https://person-registration-api.herokuapp.com/?kind=general', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(person => {
          setPersonRegisttrationOutput(person.data);
        });
  };

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96 pt-10">
        <label htmlFor="personRegistrationOutput" className="form-label inline-block mb-2 text-gray-700">
          Person Registration Output
        </label>
        <input
          type="text"
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          placeholder="Document Generation Output"
          value={personRegistrationOutput}
          readOnly
        ></input>
        <div className="flex space-x-2 justify-center pt-5">
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => generatePhysical()}>CPF</button>
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => generateJuridic()}>CNPJ</button>
          <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => generateGeneral()}>RG</button>
        </div>
      </div>
    </div>
  );
}

export default App;
