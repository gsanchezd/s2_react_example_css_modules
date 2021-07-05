type Detail = {
  title: string;
  text: string;
  }

interface ProductoProps {
  showChildren?: boolean,
  price: number;
  color: string;
  children: string;
  detail: Detail;
  isFruit: boolean;
}

const Producto = ({
  showChildren,
  price,
  color,
  children,
  detail,
  isFruit = true,
}: ProductoProps) => {
  return (
  <div className={`Producto Producto${color}`}>
  {showChildren && children}
  <strong>{detail.title}</strong>
  <p>{detail.text}</p>
  </div>
  );
}
export default Producto;