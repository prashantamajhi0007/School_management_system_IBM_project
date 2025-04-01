import EventCalendar from "@/components/EventCalender";
import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";

const StudentPage=()=>{
    return(
        <>
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            <div className="w-full xl:w-2/3">
            <div className="h-full bg-white rpunded-md">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
            <BigCalender/>
            </div>

            </div>
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
            <EventCalendar/>
            <Announcements />

            </div>
        </div>
        </>
    );

    
};

export default StudentPage;