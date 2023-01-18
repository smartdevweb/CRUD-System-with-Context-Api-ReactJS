import troll from '../img/troll.jpg'
import minions from '../img/minions.jpg'
import spiderman from '../img/spiderman.jpg'
import { v4 as uuidv4 } from 'uuid';


const moviedata = [
    {
        img:troll,
        title:"Troll",
        price:9,
        id:uuidv4()
    },
    {
        img:minions,
        title:"Minions Rise of Guru",
        price:10,
        id:uuidv4()
    },
    {
        img:spiderman,
        title:"Spiderman No Way Home",
        price:11,
        id:uuidv4()
    },
]

export default moviedata