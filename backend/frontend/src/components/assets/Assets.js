import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import CartItem from "./CartItem";

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [sn, setSn] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/assets`)
      .then((res) => setAssets(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = () => {
    setSn(inputRef.current.value);
  };

  const regex = new RegExp(`^${sn}`, "gi");

  const matches = assets.filter((item) => {
    return item.serial_number.match(regex);
  });

  return (
    <>
      <div className="row mt-3">
        <div className="col-md-6 m-auto">
          <h2 className="text-center mb-3">
            <FontAwesomeIcon icon={faDesktop} /> 主机名查询
          </h2>
          <div className="form-group">
            <input
              ref={inputRef}
              onChange={handleChange}
              type="text"
              id="search"
              className="form-control from-control-lg"
              placeholder="输入序列号..."
            />{" "}
            {matches.length === assets.length ? (
              ""
            ) : (
              <span className="text-info">{`搜索到${matches.length}个`}</span>
            )}
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3">
        {matches.length !== assets.length
          ? matches.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })
          : ""}
      </div>
    </>
  );
};

export default Assets;
