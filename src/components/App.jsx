import React, { Component } from "react";
import Header from "./Header";
import ModalAdd from "./ModalAdd";
import ModalDelete from "./ModalDelete";
import contactsB from "../api/contactsB.js";
import contactsC from "../api/contactsC.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      isModalAddShowing: false,
      isModalDeleteShowing: false,
      contactsB: contactsB,
      contactsC: contactsC
    };
  }

  openModalAddHandler = () => {
    this.setState({
      isModalAddShowing: true
    });
  };

  closeModalAddHandler = () => {
    this.setState({
      isModalAddShowing: false
    });
  };

  openModalDeleteHandler = () => {
    this.setState({
      isModalDeleteShowing: true
    });
  };

  closeModalDeleteHandler = () => {
    this.setState({
      isModalDeleteShowing: false
    });
  };

  render() {
    const { contactsB, contactsC } = this.state;
    return (
      <div className="vertical-inline-flex">
        {this.state.isModalAddShowing ? (
          <div onClick={this.closeModalAddHandler} className="back-shed"></div>
        ) : null}
        {this.state.isModalDeleteShowing ? (
          <div onClick={this.closeModalDeleteHandler} className="back-shed"></div>
        ) : null}
        <Header />
        <div className="flex-mid-container direction--column max-w-1280 margin-t-45">
          <div className="horizontal-inline-flex align--center justify--space-between">
            <div className="horizontal-inline-flex align--center justify--flex-start">
              <h3 className="font-w--400 color--default-lighter padding-lr-15--under-768">
                My Contacts
              </h3>
            </div>
            <div className="horizontal-inline-flex justify--flex-end padding-lr-15--under-768">
              <select
               className="input-outline min-w-140 margin-r-20 border-radius--6"
               >
                <option>Filter by</option>
                <option>Mobile</option>
                <option>Email</option>
              </select>
              <button
                  className="button-outline mobile-hide  min-w-140"
                  onClick={this.openModalAddHandler}
                >
                Add Contact
              </button>
              <button className="button-outline--cross mobile-only" onClick={this.openModalAddHandler} />
            </div>
          </div>
        </div>
        <ModalAdd
          className="modal"
          show={this.state.isModalAddShowing}
          close={this.closeModalAddHandler}
        ></ModalAdd>
        <ModalDelete
          className="modal"
          show={this.state.isModalDeleteShowing}
          close={this.closeModalDeleteHandler}
        ></ModalDelete>
        <div className="flex-mid-container max-w-1280">
          <div className="vertical-inline-flex">
            <div className="vertical-inline-flex margin-t-30">
              <div className="horizontal-inline-flex bg-primary-2 margin-b-15">
                <p className="pad-lr-15 font-w--500">
                  B
                </p>
              </div>
              <ul className="item pad-lr-15">
                {contactsB.map(contact => (
                  <li
                    className="horizontal-inline-flex align--center border-b-1px-silver padding-t-5 padding-b-10 margin-b-10"
                    key={contact.id}
                  >
                    <div className="cssr-card cssr-card--row justify--flex-start">
                      <div className="avatar margin-r-65 margin-r-20--under-768 overflow-hidden shadow-1--inset">
                        <img
                          className="object-fit--cover w-100-perc min-h-100p min-h-70p--under-768"
                          src={contact.image}
                          alt=""
                        />
                      </div>
                      <div className="if__content-panel direction--column">
                        <p className="color--default">
                          {contact.name} {contact.surname}
                        </p>
                        <p className="font-s--13 color--default-lighter">
                          {contact.mobile}
                        </p>
                        <p className="font-s--13 color--default-lighter">
                          {contact.email}
                        </p>
                        <p className="font-s--13 color--default-lighter">
                          {contact.address}
                        </p>
                      </div>
                    </div>
                    <div className="if__content-panel direction--column">
                      <button className="delete-icon" onClick={this.openModalDeleteHandler} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="horizontal-inline-flex bg-primary-2 margin-b-15 margin-t-15">
                <p className="pad-lr-15 font-w--500">
                  C
                </p>
              </div>
              <ul className="item pad-lr-15">
                {contactsC.map(contact => (
                  <li
                    className="horizontal-inline-flex align--center border-b-1px-silver padding-t-5 padding-b-10 margin-b-10"
                    key={contact.id}
                  >
                    <div className="cssr-card cssr-card--row justify--flex-start">
                      <div className="avatar margin-r-65 margin-r-20--under-768 overflow-hidden shadow-1--inset">
                        <img
                          className="object-fit--cover w-100-perc min-h-100p min-h-70p--under-768"
                          src={contact.image}
                          alt=""
                        />
                      </div>
                      <div className="if__content-panel direction--column">
                        <p className="color--default">
                          {contact.name} {contact.surname}
                        </p>
                        <p className="font-s--13 color--default-lighter">
                          {contact.mobile}
                        </p>
                        <p className="font-s--13 color--default-lighter">
                          {contact.email}
                        </p>
                        <p className="font-s--13 color--default-lighter">
                          {contact.address}
                        </p>
                      </div>
                    </div>
                    <div className="if__content-panel direction--column">
                      <button className="delete-icon" onClick={this.openModalDeleteHandler} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
