import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        className='try'
        src='https://images.pexels.com/photos/19528148/pexels-photo-19528148/free-photo-of-kirli-bina-yapi-insaat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Carousel.Caption>
          <h3>Çalışma</h3>
          <p>Sizin için çalışıyoruz..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='try'
        src='https://images.pexels.com/photos/11798430/pexels-photo-11798430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        <Carousel.Caption>
          <h3>Hizmet</h3>
          <p>Sizin için çalışıyoruz</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='try'
        src='https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg'
        />
        <Carousel.Caption>
          <h3>Halkımız İçin</h3>
          <p>
            Sizin için Çalışıyoruz
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;