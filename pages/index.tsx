import Input from '@/components/atoms/input';
import Text from '@/components/atoms/text';
import Layout from '@/components/templates/layout';
import { Stack } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from './_app';
import { Button } from '@fahmiramadhan1296/react-component';

const Home: NextPageWithLayout = () => {
  const [params, setParams] = React.useState(null);

  useEffect(() => {
    console.log("changess");
  }, []);
  return (
    <div><Button label='MAMAT' />/</div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

