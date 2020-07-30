import { useEffect } from 'react';
import equals from 'ramda/src/equals';
import { useParams, useLocation } from 'react-router-dom';
import { usePrevious } from 'react-use';
import { useLazyQuery, gql } from '@apollo/client';

// //////////////////////////////////////////////////////////////////////

export const GET_LAUNCHES = gql`
  query getLaunches($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      id
      mission_name
      launch_date_local
      links {
        flickr_images
        wikipedia
      }
      details
      launch_success
    }
  }
`;

// //////////////////////////////////////////////////////////////////////

function useLaunches(limit = 12) {
  let { page: activePage } = useParams();

  const location = useLocation();
  const previousLocation = usePrevious(location);
  const [getLaunches, query] = useLazyQuery(GET_LAUNCHES);

  useEffect(() => {
    if (equals(location, previousLocation)) return;
    getLaunches({
      variables: { offset: (+activePage - 1) * limit, limit },
    });
  });

  return {
    query,
    activePage,
  };
}

export default useLaunches;
