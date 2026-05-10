const getDetailsData = async singleId => {
  const res = await fetch(`http://localhost:8000/featured/${singleId}`);
  return res.json();
};

export default getDetailsData;
