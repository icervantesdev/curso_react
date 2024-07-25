
const getImagen = async() => {

    try {
        const key = 'QLMnet5pJUKyBzNeUXppnQBdZzVvBmsp';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ key }`);
        const { data } = await resp.json();
    
        const { url } =  data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append ( img );
        console.log(url);
    } catch (error) {
        //manejo error
        console.log(error)
    }


}

getImagen();