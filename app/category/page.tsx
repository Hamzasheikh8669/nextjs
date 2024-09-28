import Link from "next/link"


function Category(){
  return ( <>    <ul>
      <li className="text-blue-500 text-2xl"><Link href="/category/pakistan">pakistan</Link> </li>
      <li className="text-green-500">world</li>
      <li>sports</li>
    </ul>
<button className="text-red-600 bg-gray-300">click me</button>
</>

  )
}

export default  Category

