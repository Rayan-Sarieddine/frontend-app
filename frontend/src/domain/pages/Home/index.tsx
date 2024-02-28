// import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/pageComponents/Header";
import Grid from "../../components/pageComponents/Grid";
import Info from "../../components/pageComponents/Info";
import InfoSecond from "../../components/pageComponents/InfoSecond";
import Footer from "../../components/common/Footer";
import Nav from "../../components/common/Nav";
// import { infoDataSource } from "../../../core/dataSource/remoteDataSource/data";
// import { useDispatch } from "react-redux";
// import { addData } from "../../../core/dataSource/localDataSource/Data";
// import { AxiosError } from "axios";

function Home() {
  // const dispatch = useDispatch();
  // const [error, setError] = useState("");
  // const getData = async () => {
  //   try {
  //     const response = await infoDataSource.getData();

  //     dispatch(addData(response.data));
  //   } catch (error: unknown) {
  //     if (error instanceof AxiosError) {
  //       setError(error.response?.data.message);
  //     } else {
  //       setError("An unexpected error occurred");
  //     }
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Nav />
      <Header />
      <Grid />
      <div className="info-show">
        <Info />
        <InfoSecond />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
