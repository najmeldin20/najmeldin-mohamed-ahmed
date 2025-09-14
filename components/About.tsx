import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-center my-8 text-white text-3xl md:text-4xl relative pb-4 font-bold" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        عن الموقع
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-orange-500 to-[#1a2a6c] rounded-full"></span>
      </h2>
      <div className="bg-[rgba(255,255,255,0.1)] p-8 rounded-2xl shadow-2xl leading-loose backdrop-blur-md space-y-4">
        <p>موقع نجم الدين تي للقنوات الفضائية يقدم خدمة البث المباشر لأهم القنوات العربية والعالمية. تم إنشاء الموقع لتلبية احتياجات المشاهدين لمشاهدة القنوات الإخبارية والترفيهية بمختلف توجهاتها.</p>
        <p>نحرص على تحديث القنوات بشكل مستمر وتقديم أفضل جودة بث ممكنة لتقديم أفضل خدمة للمشاهدين.</p>
        <p>يشرفنا أن تكونوا جزءاً من مجتمعنا ونرحب بملاحظاتكم ومقترحاتكم لتحسين الخدمة.</p>
      </div>
    </section>
  );
};