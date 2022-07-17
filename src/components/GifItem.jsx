
export const GifItem = ( {url, title, type} ) => {
    
    const download = () => {
        fetch(url , { method: 'GET', headers: { 'Content-Type': 'image/webp' } })
        .then((response) => response.blob())
        .then((blob) => {
            const urlCreate = window.URL.createObjectURL( new Blob([blob]) ); // Crear un blob para descargar
            const link = document.createElement('a');
            link.href = urlCreate;
            link.setAttribute( 'download', `${title}.${type}` );
            document.body.appendChild(link);    // Agregar a la página del elemento el enlace
            link.click();                       // Iniciar la descarga
            link.parentNode.removeChild(link);  // Limpia y remueve el link
        });
    }

    return (
        <div className="card">
            <img 
                src={url} 
                alt={title} 
                onDoubleClick={ download }
            />
            <p> { title } </p>
        </div>
    )
}
