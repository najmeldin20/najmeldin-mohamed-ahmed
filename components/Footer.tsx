import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(13,21,38,0.95)] text-white text-center py-10 mt-20 border-t-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-5">
        <h3 className="text-2xl font-bold mb-2">نجم الدين تي للقنوات الفضائية</h3>
        <p className="mb-5">شاهد البث المباشر لأهم القنوات الفضائية</p>
        <p className="text-base opacity-90 text-[rgba(255,255,255,0.7)]">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} نجم الدين تي للقنوات الفضائية
        </p>
      </div>
    </footer>
  );
};