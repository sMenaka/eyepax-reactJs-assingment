import { useEffect, useState } from "react";
import { Carousel, CarouselItem, CarouselTitle } from "./CarouselComponents";
import { data } from "./data";

type CarouselWrapperProps = {
    slides: number;
    infinite: boolean;
}
type SlidesType = {
    _id: string;
    image: string;
    title: string;
    subTitle: string;
    __v: number;
}

const CarouselWrapper = ({slides, infinite}: CarouselWrapperProps) => {
    const [fetchedSlides, setFetchSlides] = useState<SlidesType[]>([]);
    useEffect(() => {
        fetch(`http://localhost:3600/api/?slides=${slides}`)
        .then((response)=>{
            return response.json();
          })
          .then((data) => {
              setFetchSlides(data);
          })
          .catch(() => {
              window.alert("Something went wrong, Please Refresh to Load again");
          })
    }, [])
    return (
        <div>
            <Carousel infinite={infinite}>
                {
                fetchedSlides.map((itm) => {
                    return (
                        <CarouselItem key={itm._id} image={itm.image}>
                        <CarouselTitle mainTitle={itm.title} subTitle={itm.subTitle} />
                        </CarouselItem>
                    )
                })
                }
            </Carousel>
        </div>
    )
}
export default CarouselWrapper;