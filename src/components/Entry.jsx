
export default function (props) {
  const { 
    mainImg,
    markerImg,
    country,
    mapLink,
    placeName,
    date,
    description
   } = props

  return (
    <article className="article-body">
      <div className="article-img-container">
        <img src={mainImg} alt="japan" />
      </div>
      <div className="info-container">
        <img src={markerImg} alt="marker" />
        <span>{country}</span>
        <a href={mapLink}>View on Google Maps</a>
        <h3>{placeName}</h3>
        <p className="date">{date}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}
