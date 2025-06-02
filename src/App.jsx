import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function App() {
  const [products, setProducts] = useState([]);
  const [chooseItem, setChooseItem] = useState([]);
  const [arrCate, setArrCate] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const res = await fetch("./db/dummyjson.json")
    const data = await res.json();
    setProducts(data.products);
    setArrCate(data.products);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products)

  const hdlAddToCart = (id, name, price, discount) => {
    let newarr = [...chooseItem];
    let newobj = { id, name, price, discount, quantity: 1 };
    let idx = newarr.findIndex((el) => el.id === id);
    if (idx === -1) {
      newarr.push(newobj);
      setChooseItem(newarr);
    } else {
      newarr[idx].quantity += 1;
      setChooseItem(newarr);
    }
  }
  const hdlIncrease = (id, name, price, discount) => {
    hdlAddToCart(id, name, price, discount);
  };

  const hdlRemove = (id) => {
    const idx = chooseItem.findIndex((el) => el.id === id);
    if (chooseItem[idx].quantity > 1) {
      let newarr = [...chooseItem]
      newarr[idx].quantity -= 1
      setChooseItem(newarr)
    } else {
      let newarr = [...chooseItem]
      newarr.splice(idx, 1)
      setChooseItem(newarr)
    }
  };

  const hdlClick = (cate) => {
    if (cate === 'ALL') {
      setProducts(arrCate);
    } else {
      let filter = arrCate.filter((el) => el.category === cate);
      setProducts(filter);
    }
  }

  const hdlInput = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value === "") {
      setProducts(arrCate);
    } else {
      const filtered = arrCate.filter((el) =>
      el.title.toLowerCase().includes(value)
      );
      setProducts(filtered);
    }
  };
console.log(input)

  return (
    <div className='flex flex-col h-screen'>
      <Header
        chooseItem={chooseItem}
        arrCate={arrCate}
        hdlInput={hdlInput}
        input={input}
      />
      <div className='flex bg-secondary h-8/9 overflow-auto'>
        <ProductList
          products={products}
          hdlAddToCart={hdlAddToCart}
          arrCate={arrCate}
          hdlClick={hdlClick} />
        <CartItem
          chooseItem={chooseItem}
          hdlIncrease={hdlIncrease}
          hdlRemove={hdlRemove} />
      </div>
    </div>
  )
}

export default App
