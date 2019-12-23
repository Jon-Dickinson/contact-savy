import React from "react";

const ModalAdd = props => {
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
            <h3 className="font-w--400 color-blue">Add Contact</h3>
            <span className="modal-close" onClick={props.close} />
          </div>
          <div className="modal-body">
            <div className="horizontal-inline-flex justify--center">
              <div className="avatar overflow-visible border-1px-silver">
                <img className="object-fit--cover w-100-perc" alt="" />
                <span className="upload-icon" />
              </div>
            </div>
            <div className="vertical-inline-flex margin-t-25">
              <input
                className="input-outline pad-lr-20"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="vertical-inline-flex margin-t-15">
              <input
                className="input-outline pad-lr-20"
                id="surname"
                type="text"
                placeholder="Surname"
              />
            </div>

            <div className="vertical-inline-flex margin-t-15">
              <input
                className="input-outline pad-lr-20"
                id="number"
                type="number"
                placeholder="Mobile Number"
              />
            </div>

            <div className="vertical-inline-flex margin-t-15">
              <input
                className="input-outline pad-lr-20"
                id="email"
                type="text"
                placeholder="Email address"
              />
            </div>

            <div className="vertical-inline-flex margin-t-15">
              <input
                className="input-outline pad-lr-20"
                id="address"
                type="text"
                placeholder="Address"
              />
            </div>

            <div className="modal-footer justify--space-between justify--space-between-under--768">
              <button className="button-outline button-outline--secondary margin-r-20 margin-r-0--under-768">
                Cancel
              </button>
              <button className="button-outline">
                Save
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
