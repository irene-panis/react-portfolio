import Navigation from './Navigation';

function Header(props) {
  return (
    <header>
      <h1>irene panis</h1>
      <Navigation 
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  );
}

export default Header;