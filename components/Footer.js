export function Footer() {
  return (
    <div>
      <div className="bg-footer-mobile md:bg-footer-website min-h-full ">
        <div className="container mx-auto py-6 pt-8 md:px-24 px-6">
          <img src="logo.png" alt="logo" className="w-32 md:w-48" />
          <div className="md:flex md:justify-between">
            <div>
              <h6 className="break-words text-white mt-4 text-sm sm:text-xl font-light">
                Bitnance Co., Ltd.
                <br />
                245 ซ.นาคนิวาส 16 ถนนนาคนิวาส <br />
                แขวง/เขต ลาดพร้าว กทม. 10230
              </h6>
              <div className="mt-4">
                <h6 className="text-white text-sm sm:text-xl font-light">
                  Phone : 080-309-5942
                </h6>
                <h6 className="text-white text-sm sm:text-xl pb-4 font-light">
                  Email : info@bitnance.com
                </h6>
              </div>
            </div>

            <div>
              {' '}
              <p className="text-bnc-yellow text-xl mt-10 sm:mt-0 font-semibold">
                ติดตามเรา
              </p>
              <img src="socialmedia.png" alt="" className="md:h-16 h-18 mt-2" />
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div className="bg-gold-mobile md:bg-gold-website md:min-h-full ">
        <p className="hidden md:text-center">
          © 2021 BITNANCE CO., LTD ALL RIGHTS RESERVED
        </p>
        <p className="text-center text-sm p-1  sm:p-3 sm:text-md">
          © 2021 BITNANCE CO., LTD ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}
