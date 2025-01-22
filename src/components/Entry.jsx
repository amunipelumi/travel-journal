
export default function (props) {
  const { 
    img,
    country,
    link,
    place,
    date,
    description
   } = props

  return (
    <article className="article-body">
      <div className="article-img-container">
        <img src={img.src} alt={img.alt} />
      </div>
      <div className="info-container">
        <img src="/marker.png" alt="marker" />
        <span>{country}</span>
        <a href={link}>View on Google Maps</a>
        <h3>{place}</h3>
        <p className="date">{date}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}
