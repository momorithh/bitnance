export default function Block() {
  return (
    <div>
      <div className="relative bg-block bg-center bg-cover bg-no-repeat h-screen">
        <div className="absolute inset-0"></div>
        <div className="relative w-460 mx-auto">
          <div className="flex flex-col rounded-xl shadow-2xl overflow-hidden h-480">
            <div className="flex-1 bg-white p-6  flex flex-col justify-between">
              <div className="flex-1">
                <img
                  className="h-32 flex mx-auto mt-2"
                  src="block-logo-1.png"
                  alt=""
                />
                <img className="h-4 mx-auto mt-4" src="block-logo.png" alt="" />

                <p className="mt-10 text-center text-base text-gray-500">
                  ไม่สามารถเข้าถึงเว็บไซต์ดังกล่าวได้
                  <br className="text-center" /> โปรดติดต่อฝ่ายเทคโนโลยี
                </p>
                <p className="mt-8 text-center text-base text-gray-500">
                  You are not allowed to access this website. <br />
                  Please contact technology department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
