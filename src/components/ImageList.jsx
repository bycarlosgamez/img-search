import Image from './Image';

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <Image image={image} key={image.id} />;
  });

  return <div>{renderImages}</div>;
}

export default ImageList;
