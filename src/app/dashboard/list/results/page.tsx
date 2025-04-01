import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import { resultsData, role} from "@/lib/data";


type Result = {
  id: number;
  title: string;
  student: string;
  // studentSurname: string;
  teacher: string;
  // teacherSurname: string;
  score: number;
  class: string;
  startTime: Date;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  ...(role === "admin" || role === "teacher"
    ? [
        {
          header: "Actions",
          accessor: "action",
        },
      ]
    : []),
];

const ResultListPage=()=>{
    const renderRow = (item: Result) => (
        <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">{item.subject} </td>
        <td className="flex items-center gap-4 p-4">{item.student} </td>
        <td className="flex items-center gap-4 p-4">{item.score} </td>
        <td className="flex items-center gap-4 p-4">{item.teacher} </td>
        <td className="flex items-center gap-4 p-4">{item.class} </td>
        <td className="flex items-center gap-4 p-4">{item.date} </td>
    
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
               < Image src="/edit.png" alt="" width={16} height={16} /> 
            </button>
            {role=== "admin" &&( <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
               < Image src="/delete.png" alt="" width={16} height={16} /> 
            </button>
        )}
            </Link>
          </div>
        </td>
      </tr>

    );
    return(
        <>
        <div  className="bg-whitep-4 rounded-md flex-1 m-4 mt-0">
            {/* TOP */}
            <div className="flex item-center juustify-between">
                <h1 className="hiddden md:block text-lg font-semibold">
                    All subjects
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch/>
                    <div className="flex item-center gap-4 self">
                        <button className="w-8 h-8 flex items-center justify-center round-full bg-lamaYellow">
                            <Image src={"/filter.png"} alt="" width={14} height={14}/>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center round-full bg-lamaYellow">
                            <Image src={"/sort.png"} alt="" width={14} height={14}/>
                        </button>
                        {role==="admin"&& <button className="w-8 h-8 flex items-center justify-center round-full bg-lamaYellow">
                            <Image src={"/plus.png"} alt="" width={14} height={14}/>
                        </button>}
                    </div>
                </div>
            </div>
             {/* LIST */}
           <Table columns={columns} renderRow={renderRow} data={resultsData} />
            {/* pagination */}
            <Pagination />
        </div>

        </>
    );

    
};

export default ResultListPage;