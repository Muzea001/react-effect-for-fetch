import PublicationHistoryList from "./PublicationHistoryList";
function ArtListItem(artItem){
const {imgUrl, title, artist, publicationHistory} = artItem
console.log(artItem, "This is an artitem object");
return (

    <li>
          <div className="frame">
          <img
            src={`https://boolean-uk-api-server.fly.dev/${imgUrl}`}
          />
          </div>
          <h3>{` ${title}`}</h3>
          <p>Artist: {artist}</p>
          <ul>
          {publicationHistory.map((publicationItem, index) => (
            <PublicationHistoryList publicationItem={publicationItem} key={index}/>
        ))}
            </ul>
    </li>



)
}

export default ArtListItem;