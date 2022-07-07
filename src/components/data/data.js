import photo1 from './images/1.jpg'
import photo2 from './images/2.jpg'
import photo3 from './images/3.jpg'
import photo4 from './images/4.jpg'
import photo5 from './images/5.jpg'
import photo6 from './images/6.jpg'
let currentDate = new Date().toJSON().slice(0, 10);

const data={
    cardData:[
        {
            image:photo1,
            rent:"Rs 5000",
            range:"1000-5000",
            name:"Palm",
            location:"Dalhousie",
            beds:"3",
            bathroom:"2",
            size:"5x7 m2",
            type:"Flat",
            date:currentDate

        },
        {
            image:photo2,
            rent:"Rs 1000",
            range:"1000-5000",
            name:"Beverly",
            location:"Delhi",
            beds:"3",
            bathroom:"2",
            size:"5x7 m2",
            type:"Flat",
            date:currentDate
        },
        {
            image:photo3,
            rent:"Rs 15000",
            range:"10000-20000",
            name:" Harbour",
            location:"Banglore",
            beds:"3",
            bathroom:"2",
            size:"5x7 m2",
            type:"House",
            date:currentDate
        },
        {
            image:photo4,
            rent:"Rs 25000",
            range:"25000+",
            name:"Spring",
            location:"Mumbai",
            beds:"3",
            bathroom:"2",
            size:"5x7 m2",
            type:"Flat",
            date:currentDate
        },
        {
            image:photo5,
            rent:"Rs 35000",
            range:"25000+",
            name:"Faulkner",
            location:"Dalhousie, India",
            beds:"3",
            bathroom:"2",
            size:"5x7 m2",
            type:"Flat",
            date:currentDate
        },
        {
            image:photo6,
            rent:"Rs 7500",
            range:"5000-10000",
            name:"Ane",
            location:"Dalhousie, India",
            beds:"3",
            bathroom:"2",
            size:"5x7 m2",
            type:"House",
            date:currentDate
        }
]
}
export default data;