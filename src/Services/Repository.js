import GetCategories from '../Assets/categories'


async function stall(stallTime = 500) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
  }

var fetchCategories = async () => {

    var data = await GetCategories;
  
    await stall(); // stalls for the default 3 seconds
    await stall(500); // stalls for 1/2 a second
  
    return data;
  
  }

  
export default fetchCategories;