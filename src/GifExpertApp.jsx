import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['HxH']);

    const addCategory = ( category ) => {
        if (categories.includes(category)) return;
        setCategories([category, ...categories]);
    }

    const removeCategory = ( value ) => {
        setCategories(categories.filter(category => (category !== value)));
    }

    return (
        <>
            <div className='paddBody'>
                <h1>Gif Expert App</h1>
                <AddCategory
                    onNewCategory = {value => addCategory(value)}
                />
                { categories.map( categoria => (
                    <GifGrid
                        key={categoria}
                        categoria={categoria}
                        onDeleteCategory= {value => removeCategory(value)}
                    />
                ))}
            </div>
        </>
    )
}
