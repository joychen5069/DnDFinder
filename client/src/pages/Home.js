import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContents from '../components/homeComponents/MainContents';
import './Pages.css';

const Home = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <div>
          <h3 className="my-5 pageTitle">Welcome to your DnD Campaign / Dungeon Master Finder</h3>
          <h5 className="text-center">Please login in to use the services. If you are new, welcome! Please sign up to get started.</h5>

          <hr />
        </div>
        <MainContents login={props.login} signUpUser={props.signUpUser} />
        <Footer />
      </div>

    </>
  )
}
export default Home; 