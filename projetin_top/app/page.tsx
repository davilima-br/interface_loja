'use client'

import Home from '@/components/Home'

export default function caminho() {
  return (
    <>
      <Home/>
    </>
  );
}

/*

useEffect(() => {
  async function loadProdutos() {
try{
  const res = await fetch('http://localhost:8000/products')
  const data = await res.json()
  setProdutos(data)
catch(err){
  console.log()
}
}}
})

*/