import Web3 from "web3";
import{useState,useEffect} from "react";
import './App.css';

function App() {
  const[state,setState] = useState({web3:null,contract:null});
  useEffect(()=>{
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    async function template(){
      const web3 = new Web3(provider);
      console.log(web3);
      //to interact with our smart contract we require two things-
      //ABI
      //Contract Address
    }
    provider && template();
  },[]); 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
