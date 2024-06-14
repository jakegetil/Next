"use client";
import React from "react";

interface ModalProps {
  onDelete: () => void;
}
const modal: React.FC<ModalProps> = ({ onDelete }) => {
  return (
    <>
      <button
        className="btn bg-red-600 hover:bg-red-800  px-10"
        onClick={() => {
          const modalId: any = document.getElementById("deleteModal");
          modalId.showModal();
        }}
      >
        Delete
      </button>
      <dialog id="deleteModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete!</h3>
          <p className="py-4">This data will only be temporarily deleted!</p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn bg-red-600 hover:bg-red-800 mr-1"
                onClick={() => {
                  onDelete();
                }}
              >
                Confirm
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default modal;
