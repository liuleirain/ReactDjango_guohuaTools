import React from "react";

const CartItem = ({ serial_number, hostname, model }) => {
  return (
    <div className="col mb-4">
      <div class="card  bg-light shadow">
        <div class="card-body text-center">
          <h5 class="card-title ">{serial_number}</h5>
          <p class="card-text">主机名：{hostname}</p>
          <p class="card-text">型号：{model}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
