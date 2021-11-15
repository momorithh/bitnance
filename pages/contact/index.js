import { Navbar, Footer } from '../../components/';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="sm:bg-contact-banner bg-contact-mobile h-60 bg-center bg-cover bg-no-repeat xl:h-95" />
      <div className="md:bg-contact-website bg-white-contact h-full md:bg-cover md:bg-center md:bg-no-repeat ">
        <div className="md:p-20 xl:grid md:grid-cols-2">
          <img src="map.png" alt="" className="p-3 xl:pl-32" />
          <div className="pl-6 xl:pl-12 xl:mt-10 2xl:mt-16 mt-2">
            <h1 className="text-2xl xl:text-4xl font-bold">
              บริษัท Bitnance จำกัด
            </h1>
            <p className="text-2xl xl:text-4xl font-bold">สำนักงานใหญ่</p>
            <div className="bg-bnc-yellow  w-24  xl:w-36 h-1 mt-1 rounded-lg xl:flex xl:justify-center mb-4" />
            <p className="text-md xl:text-lg 2xl:text-2xl font-light text-gray-600">
              เลขที่ 243 ซอยนาคนิวาส 16 ถนนนาคนิวาส แขวงลาดพร้าว
            </p>
            <p className="text-md xl:text-lg 2xl:text-2xl font-light text-gray-600">
              เขตลาดพร้าว กรุงเทพฯ 10230
            </p>
            <div className="my-6 md:mt-10 text-gray-600">
              <p className="text-md xl:text-lg 2xl:text-2xl font-light">
                โทร : 02-480-8888
              </p>
              <p className="text-md xl:text-lg 2xl:text-2xl font-light text-gray-600">
                อีเมล : info@bitnance.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
