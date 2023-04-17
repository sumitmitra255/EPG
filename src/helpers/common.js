//import { channels } from "./channels";
import { epg } from "./epg";
import axios from 'axios'
let channels = []
let programs = []
const api = async () => {
  await axios.get("http://216.48.179.109/catalog_lists/live-channel?auth_token=jqeGWxRKK7FK5zEk3xCM")
    .then((res) => {
      let data = res.data
       console.log(data.data.catalog_list_items)
      data.data.catalog_list_items.forEach(element => {
        channels.push({ uuid: element.content_id, logo: element.thumbnails.small_2_3.url })

        element.programs.forEach((sub,i)=>{
      
          programs.push(
          {  "id": sub.title+Math.random(0,i),
            "description": sub.description, 
            "isYesterday": false,
            "title":sub.title,
            "caption":sub.item_caption,
            // "since": "2022-10-17T23:50:00",
            // "till": "2022-10-18T00:55:00",
            "since":sub.start_time.replace("+05:30",""),
            "till":sub.end_time.replace("+05:30",""),
            "channelUuid":element.content_id })
          //  "image": "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
          //  "country": "Ghana", "Year": "2021–", "Rated": "TV-14", "Released": "29 Dec 2021", 
          //  "Runtime": "N/A", "Genre": "Action, Adventure, Sci-Fi", 
          //  "Director": "N/A", "Writer": "Jon Favreau", 
          //  "Actors": "Temuera Morrison, Ming-Na Wen, Matt Berry", 
          //  "Language": "English", 
          //  "Country": "United States",
          //   "Awards": "N/A", "Metascore": "N/A",
          //    "imdbRating": "8.0", "imdbVotes": "20,147", 
          //    "imdbID": "tt13668894", "Type": "series",
          //     "totalSeasons": "1", "Response": "True", 
          //    "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }], "rating": 3 })
        })
      });
    }).catch((ex) => console.log(ex))


}

export const fetchChannels = async () => {
  await api()
return channels

}

export const fetchEpg = async () =>
{
  console.log(programs)
  return programs
}
  //new Promise((res) => setTimeout(() => res(epg), 500));
