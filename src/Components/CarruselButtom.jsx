import React from 'react';

const CarruselButtom = () => {

  const images = [
    {
      url: 'https://i.ibb.co/YDvXGcH/1.jpg',
      title: 'Imagen 1',
      description: 'Esta es la imagen 1'
    },
    {
      url: 'https://i.ibb.co/BfVB4RT/2.jpg',
      title: 'Imagen 2',
      description: 'Esta es la imagen 2'
    },
    {
      url: 'https://i.ibb.co/qWtDS3q/3.jpg',
      title: 'Imagen 3',
      description: 'Esta es la imagen 3'
    },
    {
      url: 'https://i.ibb.co/TkWj4DH/4.jpg',
      title: 'Imagen 4',
      description: 'Esta es la imagen 4'
    },
    {
      url: 'https://i.ibb.co/JshwHqp/5.jpg',
      title: 'Imagen 5',
      description: 'Esta es la imagen 5'
    },
    {
      url: 'https://i.ibb.co/Bwbmz68/6.jpg',
      title: 'Imagen 6',
      description: 'Esta es la imagen 6'
    }
    
  ];

  return (
    <div className='d-flex' >
      {
        images.map((image)=> (
          <img
          style={{margin:"16px", overflow:"auto", width:'100px'}}  
          src={image.url}
          alt={image.title} />
        ))  
      }
    </div>
  );
};

export default CarruselButtom;