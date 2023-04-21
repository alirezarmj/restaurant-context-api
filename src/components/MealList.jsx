import MealItem from "./MealItem"

const Dummy_List=[
    {
        id:"m1",
        name:"Sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
    {
        id:"m2",
        name:"Schitzel",
        description:"A german speciality",
        price:16.5
    },
    {
        id:"m3",
        name:"Barbecue Burger",
        description:"American, raw, meaty",
        price:12.99
    },
    {
        id:"m4",
        name:"Green Bowl",
        description:"Healty... and green...  ",
        price:18.99
    },

]

const MealList = () => {
  return (
<div className="p-2">
<section className=" bg-white/90 m-2 px-8 py-6 max-w-[1000px] mx-auto relative -top-40 rounded-lg">
{Dummy_List.map((item, index)=>(
    <MealItem key={index} meal={item} />
))}
</section>
</div>
  )
}

export default MealList