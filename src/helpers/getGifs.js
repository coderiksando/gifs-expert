export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=F6RcfDEiA20J7dpFOhKidKu7HYKK4AvE&q=${categoria}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));
    return gifs;
}