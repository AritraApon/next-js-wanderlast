export const destinationsData = async() =>{
  const res = await fetch('http://localhost:5000/destinations');
  const data = await res.json();
  return data;
}

export const getDestinationsDetailsData = async(id) =>{
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const data = res.json()
    
    return data
}