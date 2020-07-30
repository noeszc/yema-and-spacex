import React from 'react';
import { pathOr } from 'ramda';
import useLaunches from './components/useLaunches';
import { Spinner, Box } from '@chakra-ui/core';
import Pagination from 'components/addons/Pagination';
import Launches from './components/Launches';

function LaunchesPage({ history }) {
  const {
    query: { data, loading },
    activePage,
  } = useLaunches();

  const handlePageChange = (page) => {
    history.push(`/launches/${page}`);
  };

  if (loading) return <Spinner></Spinner>;

  return (
    <Box>
      <Launches launches={pathOr([], ['launchesPast'], data)}></Launches>
      <Pagination
        {...{
          activePage: activePage,
          totalPages: 3,
          onPageChange: handlePageChange,
          marginY: 8,
        }}
      ></Pagination>
    </Box>
  );
}

export default LaunchesPage;
