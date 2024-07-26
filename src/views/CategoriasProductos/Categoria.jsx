import { Layout } from '../../components/Layout';
import { Buscador } from '../../components/Inputs';
import { Footer } from '../../components/Footer';
import { CardCategoria } from '../../components/Card';
import imagen from '../../assets/imagen4.jpeg';
import {CarritoComprasIcono} from "../CarritoComprar/IconoCarritoCompras"

//
export const Categoria = () => {
  return (
    <>
      <Layout />
      <CarritoComprasIcono/> 
      <Buscador />
      <div className='flex min-h-screen items-center justify-center px-2'>
        <div>
          <div className=' grid grid-cols-2 gap-6 md:grid-cols-4 mb-10'>
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
            <CardCategoria
              name={'hola mundo'}
              price={'25.000'}
              imageSrc={imagen}
            />
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
};
