import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";
import spinner from "../img/spinner.svg";
import Card from "../Components/Card";

import { useFetchInitialData } from "../utils/hooks";
import OtherPagesCard from "../Loading/OtherPagesCard";

const Popular = (props) => {
  const ref = useRef(null);

  const handelClick = () => {
    props.handelClick();
  };
  const loadMore = () => {
    props.loadMorePopular();
  };

  const { loading, popular, loadMorePopular } = props;

  useFetchInitialData(loading, popular, loadMorePopular, ref, window)

  return (
    <>
      {Object.keys(props.popular).length === 0 ? (
        <OtherPagesCard title="Popular Anime"/>
      ) : (
        <>
          <section className="movies">
            <div className="filter-bar">
              <div className="heading">
                <h3>Popular Anime</h3>
              </div>
            </div>

            <div className="movies-grid" ref={ref}>
              {props.popular.map((rec) => (
                <Card
                  rec={rec}
                  key={rec.id} handelClick={handelClick}
                />
              ))}
            </div>
            <InfiniteScroll
              dataLength={props.popular.length}
              next={loadMore}
              hasMore={true}
              loader={<img src={spinner} alt="spinner" className="spinner" />}
            ></InfiniteScroll>
          </section>
        </>
      )}
    </>
  );
};

export default Popular;
