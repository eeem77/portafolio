import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './Thumbnail.css';

function Thumbnail() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Img variant="top" src="eeem77.jpeg" />
        <Image width={200} src="qr.svg" fluid />
        <Card.Text className='pt-3'>
          <span className='title-home'>
            Ernesto E. Escobar M.
          </span>
        </Card.Text>
        <Card.Text className='pt-2'>
          Desarrollador web con más de 5 años de experiencia, focalizado en el uso de JavaScript como mi principal stack tecnológico. He nutrido mi formación profesional en la Dirección de Sistemas y Base de Datos del Consejo Nacional Electoral de la República Bolivariana de Venezuela. En la actualidad, también desempeño un rol fundamental en AP PRINTING CORP, donde automatizo procedimientos, desarrollo y mantengo su plataforma. Mi pasión radica en la creación de código limpio y eficiente, además de mi compromiso con la tecnología y la innovación. Mi búsqueda constante de nuevos desafíos profesionales me impulsa a trabajar en conjunto con equipos dinámicos y de alto rendimiento, todo con el objetivo de brindar la mejor experiencia posible a los usuarios y clientes.
        </Card.Text>
        <a href="" download="eeem77.pdf"><Button variant="primary" >Descargar CV</Button></a>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;