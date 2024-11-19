import './style.css'
import { useTranslation } from 'react-i18next'; 

const HeaderInfo = () => {
  const { t  } = useTranslation();
  
console.log();

  return (
    <section className='section-border'>
      <h2 className="text-white font-bold text-2xl lg:text-[32px] lg:text-center lg:mt-8 mb-6 lg:mb-16">
        {t('HeaderInfo.h2')}
        <span className="block mt-2 ">
          {t('HeaderInfo.span')}
        </span>
      </h2>
      <div className="flex gap-5 lg:flex-row flex-col ">
        <div className="Header-Info-card hover:bg-[#ffffff5b] flex-1 hover:shadow-custom transition-all duration-300 border border-border-color rounded-2xl Header-Info-card leading-9">
          <p className="text-white mx-8 lg:mx-12 my-8 text-base lg:text-[20px] ">
            {t('HeaderInfo.box-one')}
          </p>
        </div>
        <div className="Header-Info-card hover:bg-[#ffffff5b] flex-1 hover:shadow-custom transition-all duration-300 border border-border-color rounded-2xl card leading-9">
          <p className="text-white mx-8 lg:mx-12 my-8 text-base lg:text-[20px]">
            <span className='font-bold block text-xl lg:text-2xl'>{t('HeaderInfo.box-Two-span-One')}</span>
            {t('HeaderInfo.box-Two-p-One')}
            <span className='font-bold block text-2xl'>{t('HeaderInfo.box-Two-span-Two')}</span>
            {t('HeaderInfo.box-Two-p-Two')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderInfo;
