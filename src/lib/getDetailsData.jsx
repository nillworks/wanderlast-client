const getDetailsData = async singleId => {
  const res = await fetch(`http://localhost:8000/featured/${singleId}`, {
    headers: { authorization: 'logged in' },
  });
  return res.json();
};

export default getDetailsData;
