const shortenText= text =>{
  return text.split(" ").slice(0 , 4).join("-");
}
const searchProducts = (products, searchValue) => {
  if (!searchValue) {
    return products;
  } else {
    let searchedProducts = products.filter((p) =>
      p.title.toLowerCase().includes(searchValue)
    );

    return searchedProducts;
  }
};
const selectCategory = (products, category) => {
  if (!category) {
    return products;
  } else {
    let selectedCategory = products.filter(
      (p) => p.category.toLowerCase() === category
    );
    return selectedCategory;
  }
};
const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;

    return rest;
  }
  if (newQuery.searchValue === "") {
    const { searchValue, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const initialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const searchValue = searchParams.get("searchValue");
  if (category) query.category = category;
  if (searchValue) query.searchValue = searchValue;
  return query;
};
const sumProducts = products => {
  const itemsCounter = products.reduce((pre, cur) =>  pre + cur.quantity, 0);
  const totalPrice=products.reduce((pre,cur)=>pre + cur.price * cur.quantity , 0).toFixed(2)

return{itemsCounter,totalPrice};

};
const sumPrice=products=>{
  
  return products.reduce((pre,cur)=>pre + cur.price * cur.quantity , 0).toFixed(2)
}
const sumQuantity=products =>{
  
  return products.reduce((pre, cur) =>  pre + cur.quantity, 0);
}
export {
  searchProducts,
  selectCategory,
  createQueryObject,
  initialQuery,
  sumPrice,
  sumQuantity,
  shortenText
};
