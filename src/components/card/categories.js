import React from 'react';

const CategoryCard = ({ icon, name, bgColor, textColor }) => {
    return (
        <div className={`flex flex-col items-center justify-center border ${bgColor} p-10 w-32 h-50 flex-shrink-0`}>
            <div className={`text-4xl md:text-4xl ${textColor} mb-2`}>
                {icon}
            </div>
            <p className={`mt-2 text-center ${textColor}`}>{name}</p>
        </div>
    );
};

export default CategoryCard;
