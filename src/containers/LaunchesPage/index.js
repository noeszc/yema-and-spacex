import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import * as R from 'ramda';
import { Box } from '@chakra-ui/core';

import useLaunches from './components/useLaunches';
import Pagination from 'components/addons/Pagination';
import Launches from './components/Launches';

// //////////////////////////////////////////////////////////////////////

const getPlaceholder = R.compose(
  R.map((id) => ({ id })),
  R.range,
);

// //////////////////////////////////////////////////////////////////////

function LaunchesPage({ history }) {
  const { page: activePage } = useParams();
  const { data, loading } = useLaunches(activePage);

  const handlePageChange = (newPage) => {
    if (+activePage === +newPage) return;
    history.push(`/launches/${newPage}`);
  };

  return (
    <Box>
      <Helmet>
        <title>Past Lanunches</title>
        <meta name="description" content="Past launches" />
      </Helmet>
      <Launches
        isLoading={loading}
        launches={R.pathOr(getPlaceholder(0, 12), ['launchesPast'], data)}
      ></Launches>
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
