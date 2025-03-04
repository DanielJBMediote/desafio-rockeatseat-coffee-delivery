
import apiData from "../../../apidata.json";
import { Product } from "./Product";

export function ProductList() {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-20">
      {apiData.map(data => <Product key={data.id} data={data} />)}
    </div>
  )
}