import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>This is about page</p>
    </Layout>
  );
};

export const Head = () => <title>About</title>;

export default AboutPage;
