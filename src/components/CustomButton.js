import React from 'react';

// HTML equivalents for `react-native-web`
const CustomButton = ({ title, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
    >
      {title}
    </button>
  );
};

export default CustomButton;
