function List(){// objects
const fruits = [{id: 1, name: "Apple", cals: 95},{id: 2, name: "Orange", cals: 45},
                {id: 3, name: "Banana", cals: 105},{id: 4, name: "Coconut", cals: 159},{id: 5, name: "PineApple", cals: 37}];

  const listItems = fruits.map(fruit =>  <li key = {fruit.id}>
    {fruit.name}:&nbsp;{fruit.cals}
    </li>); //arrow

  return(
    <>
    <ol>{listItems}</ol>
    </>
  );
}

export default List