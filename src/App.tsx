import Producto from './Producto';
import AddToCart from './AddToCart';

import './App.css';

function App() {
return (
<div className="App">
  <div className="alert alert-primary" role="alert">
  ¡Hola Mundo!
  </div>
  <Producto
  showChildren
  color="red"
  price={12}
  isFruit={true}
  detail={{
  title: 'Platano',
  text: 'es un fruto comestible, de varios tipos de grandes plantas herbáceas del género Musa',
  }} > </Producto>
  <AddToCart></AddToCart>

</div>
);
}
export default App;