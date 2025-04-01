import Image from "next/image";

const SingleTeacherPage=()=>{
    return(
    <>
    <p className="text-sm text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="flex item-center justify-between gap-2 flex-wrap text-wrap text-xs fonnt-medium">
       
        <div className="w-full xl:w-1/3 lg-w-full flex item-center gap-2 ">
        <Image src='/blood.png' alt='' width={14} height={14}  />
        <span>A+</span>
         </div>
         <div className="w-full xl:w-1/3 lg-w-full flex item-center gap-2 ">
        <Image src='/date.png' alt='' width={14} height={14}  />
        <span>january 2025</span>
         </div>
         <div className="w-full xl:w-1/3 lg-w-full flex item-center gap-2 ">
        <Image src='/mail.png' alt='' width={14} height={14}  />
        <span>user@gmail.com</span>
         </div>
         <div className="w-full xl:w-1/3 lg-w-full flex item-center gap-2 ">
        <Image src='/phone.png' alt='' width={14} height={14}  />
        <span>+91 8776542398</span>
         </div>
        <div className="w-full xl:w-1/3"></div>
    </div>
    </>
    );

};

export default SingleTeacherPage;

 