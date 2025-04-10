import { FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";


const Login = () => {
const [username, setUsername] = useState("");
const [passaword, setPassaword]= useState("");
  
const handleSubmit =(event)=>{
  event.preventDefault();
  console.log(username, passaword);
console.log("envio");


alert ("Enviando os dados:"+ username +"-"+ passaword)
};

return (

      <div className='container' >
<form  onSubmit={handleSubmit}>
    <h1>Acesse o Sistema </h1>
<div>
    <input type="email" placeholder='e-mail' 
     onChange={(e)  => setUsername(e.target.value) }/>
<FaUser className="icon"/>
</div>
<div>
    <input type="password" placeholder='senha' 
     onChange={(e)  => setPassaword(e.target.value) }/>

<FaLock/>
</div> 

<div className="recall-forget" >
  <label >
    <input type="checkbox" />
    Lembre da Senha Por Mim 
    </label> 
    <a href="#">Esqueceu a Senha</a>

</div>

<button>Entrar</button>
<div className="signup-link"  >   
<p>
  Não tem uma Conta ainda? 
  <a href="#">Registrar</a>
</p>

</div>
</form>
</div>
  );
   };
   export  default Login; 
