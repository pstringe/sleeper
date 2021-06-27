import { GridList, GridListTile} from "@material-ui/core"

const Giphy = ({gifs, select, close}) => {
    console.log(gifs);

    const handleClick = (url) => {
        select(url);
        console.log('select', url)
        close();
    }

    return (
        <GridList cellHeight={100} cols={3}>
            {gifs?.map((gif, idx) => (
                <GridListTile key={idx}>
                    <img onClick={() => handleClick(gif.images.original.url)} src={gif.images.preview_gif.url} alt={gif.title}/>
                </GridListTile>
            ))}
        </GridList>
    );
}
 
export default Giphy;