import ArtListItem from "./ArtListItem";

function ArtList(props) {

    const {artList} = props; 
    console.log(artList,"this is the list");
    return (
        <ul className="art-list">
          {artList.map((artItem, i) => (
            <ArtListItem artItem={artItem} key={i}/>

        ))}

        </ul>
    );
}

export default ArtList;