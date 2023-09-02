/* eslint-disable react/no-unescaped-entities */
import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  return (
    <div className="flex flex-col align-items">
      <h2>Uh oh!</h2>
      <h3>The page you were looking for couldn't be found...</h3>
      <span>{error.message}</span>
    </div>
  );
}