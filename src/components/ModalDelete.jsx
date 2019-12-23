import React from "react";

const ModalDelete = props => {
  return (
    <div
      className="modal"
      style={{
        display: props.show ? "inline-flex" : "none"
      }}
    >
      <div className="modal-wrapper">
        <div className="vertical-inline-flex bg-ffffff pad-all-25 shadow-2">
          <div className="modal-header">
            <h3 className="font-w--400 color-blue">Delete Contact</h3>
            <span className="modal-close" onClick={props.close} />
          </div>
          <div className="modal-body">
            <div className="horizontal-inline-flex justify--center">
              <p className="color--default-lighter">Are you sure you want to delete this contact?</p>
            </div>
            <div className="modal-footer justify--space-around">
              <button className="button-outline button-outline--secondary margin-l-40 margin-lr-15--under-768">
                Cancel
              </button>
              <button className="button-outline margin-r-40 margin-lr-15--under-768">
                Delete
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
