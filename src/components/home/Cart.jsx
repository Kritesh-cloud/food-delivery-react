import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const Cart = () => {
  const [userToken, setUserToken] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const data = {
    headers: {
      Authorization: userToken,
    },
  };

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const getUserCart = () => {
    const path = `http://localhost:8080/user/order/get-user-basket`;
    axios
      .get(path, data, data)
      .then((res) => {
        const sortedItems = [...res.data.menuItemResponses].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setItems(sortedItems);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const itemQuantityUpdate = (itemId, quantity) => {
    const path = `http://localhost:8080/user/order/update-item-quantity?menuItemId=${itemId}&quantity=${quantity}`;
    axios
      .post(path, data, data)
      .then((res) => {
        setItems(res.data.menuItemResponses);
        console.log(res.data);
        toggleRefresh();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const itemRemove = (itemId) => {
    const path = `http://localhost:8080/user/order/remove-from-basket/${itemId}`;
    axios
      .post(path, data, data)
      .then((res) => {
        console.log(res.data);
        toggleRefresh();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getUserToken = () => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(loginToken)}`);
      toggleRefresh();
    } else {
      console.log("loginToken", loginToken, false);
    }
  };

  const handleIncrease = (itemId, itemQuantity) => {
    console.log(itemId, itemQuantity, "+");
    itemQuantityUpdate(itemId, itemQuantity + 1);
  };

  const handleDecrease = (itemId, itemQuantity) => {
    console.log(itemId, itemQuantity, "-");
    itemQuantityUpdate(itemId, itemQuantity - 1);
  };

  const handleRemove = (itemId) => {
    itemRemove(itemId);
  };

  const calculateTotal = () => {
    if (items && items.length > 0) {
      return items
        .reduce(
          (total, item) =>
            total + item.quantity * item.price * (1 - item.discount / 100),
          0
        )
        .toFixed(2);
    }
    return 0;
  };

  useEffect(() => {
    getUserToken();
  }, []);

  useEffect(() => {
    getUserCart();
  }, [refresh]);

  return (
    <div className="flexcol bor">
      <div
        className="bor fixed w100 bg-white "
        style={{ boxShadow: "2px 0 5px rgba(0,0,0,.5)" }}
      >
        <Navigation cartRefresh={refresh} />
      </div>
      <div className="p-6 min-h-[500px] max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4 bor w100  mt-[80px] mb-24">
        <h1 className="text-2xl font-bold text-gray-800">Order Summary</h1>
        <div className={`${loading ? "" : "none"}`}>Loading...</div>
        <ul>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">Price: NRS {item.price}</p>
                  <p className="text-gray-500">Discount: {item.discount}%</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrease(item.id, item.quantity)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id, item.quantity)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="px-3 py-1 bg-gray-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <div className="text-right text-lg font-semibold text-gray-800">
          Total: NRS {calculateTotal()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
