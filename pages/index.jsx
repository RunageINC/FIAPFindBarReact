import FrontPage from "../components/template/HomePage/FrontPage";

import { barImageList, fiapURL } from "../components/static/config";

function HomePage(props) {
  return <FrontPage barImageList={barImageList} barList={props.barList}/>;
}

export async function getServerSideProps(context) {
  const url = fiapURL + "/bares";

  const bares = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));

  return {
    props: {
      barList: bares,
    }
  };
}

export default HomePage;
