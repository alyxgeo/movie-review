


const DetailPage = (props) => {

  console.log(props.select);
  console.log(props.shows.filter((item)=>(item.name===props.select)));

  const selectedShow = props.shows.filter((item)=>(item.name===props.select))

  return (
    <div>
      <h2>details page</h2>
      <p>hello</p>
      <div dangerouslySetInnerHTML={{__html:selectedShow[0].summary}} ></div>
      
      <img src={selectedShow[0].image} />
    </div>
  );
};

export default DetailPage;
