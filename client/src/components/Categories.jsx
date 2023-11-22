/* eslint-disable react/jsx-key */
import { categories } from "../data/data"
import CategoryItem from "./CategoryItem"

function Categories() {
  return (
    <div className="flex justify-between flex-col md:flex-row p-[20px]">
      {
        categories.map(item=>(
          <CategoryItem item = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories