import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   // getGifs(category).then( imgs => setImages(imgs));
  //   getGifs(category).then(setImages);
  // }, [category]);

  // // getGifs();

  const { data:images, loading } = useFetchGifs(category);

  console.log(images);
  console.log(loading);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {/* <div className="card-grid"> */}
      {/* {images.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))} */}

      {/* {images.map((img) => (
          <GifGridItem key={img.key} {...img} />
        ))} */}
      {/* </div> */}
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem key={img.key} {...img} />
          ))
        }
      </div>
    </>
  );
};

export default GifGrid;
