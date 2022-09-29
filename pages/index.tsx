import Input from '@/components/atoms/input';
import Text from '@/components/atoms/text';
import Layout from '@/components/templates/layout';
import { Button, Stack } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const [params, setParams] = React.useState(null);

  useEffect(() => {
    console.log("changess");
  }, []);
  
  
  

  // const handle = () => {
  //   setParams('false')
  // };

  return (
    <Stack>
      <Button variant='outlined' >BS2</Button>
    </Stack>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

