import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data/EntryData"

export default function () {

  const entryData = data.map(item => {
    return (
      <Entry
        key={item.id}
        {...item}
        // img={item.img}
        // country={item.country}
        // link={item.link}
        // place={item.place}
        // date={item.date}
        // description={item.description}
      />
    )
  })

  return (
    <>
      <Header />
      {entryData}
    </>
  )

}
