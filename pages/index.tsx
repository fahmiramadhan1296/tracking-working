import Input from "@/components/atoms/input";
import Text from "@/components/atoms/text";
import Layout from "@/components/templates/layout";
import { Stack } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";
import { Button } from "@fahmiramadhan1296/react-component";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/working-time");
  }, []);
  return (
    <div>
      <Button label="MAMAT" />/
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
