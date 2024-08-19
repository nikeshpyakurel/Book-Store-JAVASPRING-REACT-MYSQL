import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to install Font Awesome



const Footer = () => {
    return (
        <div className="container" style={{ backgroudColor:'#7448e3'}}>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#7448e3' }}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Bookshelf</h6>
                <p>
                A bookstore is a treasure chest for the curious mind,
        where each book is a key unlocking realms of knowledge and imagination
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a className="text-white">book</a></p>
                <p><a className="text-white">book</a></p>
                <p><a className="text-white">Ebook</a></p>
                <p><a className="text-white">MeroDiary</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Social links</h6>
                <p><a className="text-white">Instagram</a></p>
                <p><a className="text-white">Facebook</a></p>
                <p><a className="text-white">Whatsapp</a></p>
                <p><a className="text-white">Viber</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><FontAwesomeIcon icon="home" className="mr-3" /> Ktm</p>
                <p><FontAwesomeIcon icon="envelope" className="mr-3" /> psiddhartha62@gmail.com</p>
                <p><FontAwesomeIcon icon="phone" className="mr-3" /> 9849800638</p>
                <p><FontAwesomeIcon icon="print" className="mr-3" />9845583847 </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright:
                  <a className="text-white" href="https://mdbootstrap.com/">MeroDiary</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
    );
}

export {Footer};