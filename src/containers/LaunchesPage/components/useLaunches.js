import { useEffect } from 'react';
import equals from 'ramda/src/equals';
import { useLocation } from 'react-router-dom';
import { usePrevious } from 'react-use';
import { useLazyQuery, gql } from '@apollo/client';

// //////////////////////////////////////////////////////////////////////

export const GET_LAUNCHES = gql`
  query getLaunches($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      id
      mission_name
      launch_date_utc
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

function useLaunches(activePage = 1, limit = 12) {
  const location = useLocation();
  const previousLocation = usePrevious(location);
  const [getLaunches, query] = useLazyQuery(GET_LAUNCHES);

  useEffect(() => {
    if (equals(location, previousLocation)) return;
    getLaunches({
      variables: { offset: (+activePage - 1) * limit, limit },
    });
  });

  return query;
}

export default useLaunches;
