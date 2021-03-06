import Head from 'next/head';
import Image from 'next/image';

import { Navbar, Footer } from '../components';

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BITNANCE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>

      <main>
        <section>
          <Navbar />
          <div className="bg-bnc-mobile bg-cover h-auto sm:bg-bnc-banner sm:bg-center sm:bg-cover bg-no-repeat xl:h-95">
            <div className="xl:pt-36 sm:py-20 xl:py-10 sm:pl-20 md:mr-7 lg:mr-0 xl:px-48 px-6 pt-4">
              <h1 className=" text-white font-bold mt-16 text-md lg:text-5xl sm:text-3xl">
                บริษัทพัฒนาซอฟต์แวร์
                <br />
                และแอพพลิเคชั่นทางด้านฟินเทค
              </h1>
              <div className="bg-bnc-yellow w-16 sm:w-56 sm:mt-4 h-1 sm:h-2 rounded-lg" />
              <p className="block text-white mt-6 sm:text-2xl font-light pb-4 mr-8">
                ด้วยเทคโนโลยีบล็อกเชนระดับโลก
                <br className="hidden xl:block" />
                สร้างประสบการณ์ใหม่ทางด้านการเงินการลงทุนให้กับผู้ใช้งานด้วย
                <br className="hidden xl:block" />
                ประสิทธิภาพสูงเข้าถึงง่าย รวดเร็ว มั่นใจ
                และเน้นความปลอดภัยสูงสุด
              </p>
            </div>
          </div>
        </section>
        {/* </div> */}
        <div className="bg-white 2xl:bg-bnc-white">
          <div className="lg:h-480 2xl:bg-pact-xl 2xl:bg-cover 2xl:h-680  bg-center md:bg-cover md:bg-pact-desktop bg-no-repeat pt-2">
            <div className="md:grid md:grid-cols-2 min-h-full sm:px-10">
              <div className="col-start-2 flex flex-col justify-center">
                <h2 className="block text-lg text-center md:text-left md:text-2xl lg:text-4xl font-bold  pt-2 ">
                  วรวัฒน์ นาคแนวดี
                </h2>
                <div className="bg-bnc-yellow mx-auto md:mx-0 w-16 md:w-40 sm:mt-1 h-1 rounded-lg sm:flex sm:justify-center" />
                <span className="text-gray-500 block mx-auto md:mx-0 text-md md:text-lg lg:text-xl lg:mt-2 lg:pb-2 mt-2 pb-2 md:mt-0 md:mb-0 font-light">
                  ประธานเจ้าหน้าที่บริหาร บริษัท บิทแนนซ์ จำกัด
                </span>
                <div className="sm:w-full xl:w-4/6">
                  <img
                    src="pact-mobile.png"
                    alt=""
                    className="md:hidden mx-auto my-0"
                  />
                  <p
                    style={{ lineHeight: '22px' }}
                    className=" text-gray-700 my-4 md:my-0 lg:pt-2 sm:text-left md:text-md lg:text-lg text-sm text-center  px-8 sm:px-0 md:pb-6 font-light"
                  >
                    ด้วยประสบการณ์และความเชี่ยวชาญทางด้านเทคโนโลยี การเงิน
                    และการลงทุนในตลาดโลกมากว่า 10 ปี การันตีด้วยรางวัล
                    ระดับนานาชาติมากมายล่าสุดกับรางวัล“สุดยอดผู้บริหารหน้าใหม่ด้านการเทรดยอดเยี่ยมแห่งภูมิภาคเอเชียประจำปี
                    2019” (Best New Trading CEO Asia 2019) จากนิตยสาร
                    ชั้นนำของประเทศอังกฤษอย่าง Global Banking & Finance Review
                    ยึดมั่นอุดมการณ์ที่ต้องการพัฒนาศักยภาพมนุษย์
                    ให้มีความรู้ความสามารถด้านการลงทุนและใช้ชีวิตเรียนรู้ที่จะ
                    ประสบความสำเร็จและช่วยเหลือผู้อื่นต่อไปโดยไม่มีค่าใช้จ่าย
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-blue-mobile sm:bg-blue-desktop h-auto">
          <h2 className="sm:text-2xl text-white text-center pt-8 sm:pt-20">
            วิสัยทัศน์
          </h2>
          <div className="bg-bnc-yellow mx-auto w-16 md:w-20 h-1 sm:w-32 mt-1 rounded-lg sm:flex sm:justify-center" />

          <p className="sm:text-xl sm:container sm:mx-auto sm:px-32 xl:px-60 px-8 py-2 text-white text-center sm:mt-2 font-light">
            เราจะสร้างสรรค์นวัตกรรมทางด้านการเงินเพื่อยกระดับมาตรฐานธุรกิจสินทรัพย์ดิจิทัลและเทคโนโลยีการเงินใน
            ประเทศไทยให้ทัดเทียมนานาชาติ
            พร้อมสร้างการเปลี่ยนแปลงทางด้านการลงทุนให้กับผู้ใช้งานด้วยเทคโนโลยีที่ทันสมัย
            รวดเร็ว มีมาตรฐานความปลอดภัยสูงสุด
            ภายใต้การกํากับดูแลกิจการที่ดีตามที่
            <br className="hidden xl:block" />
            กฎหมายกําหนดอย่างเคร่งครัด ซึ่งยึดเป็นหลักสําคัญในการบริหารจัดการ
          </p>
          <h2 className="sm:text-2xl text-white text-center pt-4 sm:pt-20">
            พันธกิจ
          </h2>
          <div className="bg-bnc-yellow mx-auto w-16 md:w-20 h-1 sm:w-32 mt-1 rounded-lg sm:flex sm:justify-center" />

          <p className="sm:text-xl sm:container sm:mx-auto pb-5 px-8 sm:pb-20 sm:px-32 xl:px-60 text-white text-center mt-4 font-light">
            สร้างสรรค์เทคโนโลยีด้านการเงินและการลงทุนด้วยนวัตกรรมอันทันสมัยเพื่อตอบสนอง
            ต่อความต้องการของลูกค้าอย่างพึงพอใจ
            สร้างประสบการณ์การลงทุนเหนือระดับให้กับลูกค้าด้วยการก้าวข้าม
            ทุกขีดจํากัดสู่โลกการเงินภายใต้เทคโนโลยีที่ปลอดภัย สะดวก ใช้งานง่าย
          </p>
        </div>
        <div style={{ backgroundColor: '#F7F7F7' }}>
          <div className="sm:w-4/5 mx-auto">
            <h2 className="sm:text-4xl text-lg text-center sm:pt-10 pt-6 font-bold">
              จุดเด่นของบริษัท
            </h2>

            <div className="bg-bnc-yellow mx-auto w-20 h-1 sm:w-44 sm:mt-1 rounded-lg sm:flex sm:justify-center" />
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-10 p-6 sm:p-20 ">
              <div>
                <img
                  src="civil-rights.png"
                  alt=""
                  className="w-12 md:w-16 md:h-16 mx-auto"
                />
                <p className="text-center break-words text-md md:text-lg pt-3 font-light">
                  จดทะเบียนเป็นนิติบุคคล <br className="hidden xl:block" />
                  ถูกต้องตามกฎหมาย
                </p>
              </div>
              <div className="">
                <img
                  src="money-bag.png"
                  alt=""
                  className="w-12 md:w-16 md:h-16 mx-auto"
                />
                <p className="text-center text-md md:text-lg pt-3 font-light">
                  ทุนจดทะเบียน 150 ล้านบาท <br className="hidden xl:block" />
                  ชำระเต็มจำนวน
                </p>
              </div>
              <div className="">
                <img
                  src="knowledge.png"
                  alt=""
                  className="w-12 md:w-16 md:h-16 mx-auto"
                />
                <p className="text-center text-md md:text-lg pt-3 font-light">
                  ผู้บริหารมีประสบการณ์และ
                  <br className="hidden xl:block" />
                  เชี่ยวชาญในด้านการเงิน <br className="hidden xl:block" />
                  การลงทุนระดับโลกมานานกว่า 10 ปี
                </p>
              </div>
              <div className="">
                <img
                  src="ta.png"
                  alt=""
                  className="w-12 md:w-16 md:h-16 mx-auto"
                />
                <p className="text-center text-md md:text-lg pt-3 font-light">
                  ผลิตภัณฑ์และบริการต่างๆ <br className="hidden xl:block" />
                  ตอบโจทย์ผู้ใช้งานบนความ <br className="hidden xl:block" />{' '}
                  พึงพอใจสูงสุด
                </p>
              </div>
              <div className="">
                <img
                  src="secure.png"
                  alt=""
                  className="w-12 md:w-16 md:h-16 mx-auto"
                />
                <p className="text-center text-md md:text-lg pt-3 font-light">
                  ผลิตภัณฑ์ใช้งานง่าย สะดวก <br className="hidden xl:block" />
                  รวดเร็ว ด้วยมาตรฐาน <br className="hidden xl:block" />
                  ความปลอดภัยระดับโลก
                </p>
              </div>
              <div className="">
                <img
                  src="customer.png"
                  alt=""
                  className="w-12 md:w-16 md:h-16 mx-auto"
                />
                <p className="text-center text-md md:text-lg pt-3 font-light">
                  ระบบบริการลูกค้าที่รวดเร็ว <br className="hidden xl:block" />
                  หลากหลายช่องทางตลอด <br className="hidden xl:block" />
                  24 ชั่วโมง 7 วัน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-100"></div>
        {/* <div className="md:container mx-auto bg-white">
          <img src="news.png" alt="" className="w-full p-2 xl:py-8 xl:px-24" />
        </div> */}

        <Footer />
      </main>
    </div>
  );
}
