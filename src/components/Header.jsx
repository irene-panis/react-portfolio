import Navigation from './Navigation';

function Header(props) {
  return (
    <header className="flex justify-end py-5 px-10">
      <Navigation 
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  );
}

export default Header;