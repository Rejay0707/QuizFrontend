import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants.js";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setID } from "../Slices/CategoryIDSlice.js";
import { useNavigate } from "react-router-dom";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/category`);
        console.log(response);
        setCategories(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const SelectButton = (categoryId) => {
    console.log(categoryId);
    dispatch(setID(categoryId));
    navigate("/questions");
  };

  return (
    <div style={{ paddingLeft: 30 }}>
      {categories.slice(0, 3).map((category) => (
        <div
          key={category._id}
          style={{ display: "inline-block", marginRight: 20 }}
        >
          <h2>{category.name}</h2>
          <img
            src={category.image}
            alt={category.name}
            width={450}
            height={280}
          />
          <div>
            <Button
              variant="contained"
              style={{ width: 450 }}
              onClick={() => SelectButton(category._id)}
            >
              Select
            </Button>
          </div>
        </div>
      ))}

      <br />
      {categories.slice(3).map((category) => (
        <div
          key={category._id}
          style={{ display: "inline-block", marginRight: 20 }}
        >
          <h2>{category.name}</h2>
          <img
            src={category.image}
            alt={category.name}
            width={450}
            height={280}
          />
          <div>
            <Button
              variant="contained"
              style={{ width: 450 }}
              onClick={() => SelectButton(category._id)}
            >
              Select
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
