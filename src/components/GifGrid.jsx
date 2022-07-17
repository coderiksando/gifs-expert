import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem, Category } from './';


export const GifGrid = ({ categoria, onDeleteCategory }) => {

    const { images, isLoading } = useFetchGifs( categoria );
    
    return (
        <>
            <Category
                categoria={categoria}
                onDeleteCategory = { () => onDeleteCategory(categoria) }
            />
            {
                isLoading && (<h2> Cargando... </h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => {
                        return (
                            <GifItem
                                key={image.id}
                                { ...image }
                            />
                        );
                    })
                }
            </div>
        </>
    );
}
