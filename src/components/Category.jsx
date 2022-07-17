import { FaTrash } from 'react-icons/fa';

export const Category = ({ categoria, onDeleteCategory }) => {

    return (
        <>
        <div className="input-group mb-3 pt-2">
            <div className="input-group-prepend">
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={ () => onDeleteCategory(categoria) }>
                    <FaTrash />
                </button>
            </div>
            <h3 className="p-1">{ categoria }</h3>
        </div>
        </>
    )
}
