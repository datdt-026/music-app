import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import RowList from "../Home/RowList";

const Home = () => {
  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title=""
        btnLeft={{ icon: "menu", onPress: () => {} }}
        btnRight={{ icon: "search", onPress: () => {} }}
      />
      <ScrollView>
        <RowList title={"Rcmd for u"} />
        <RowList title={"My playlist"} />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
