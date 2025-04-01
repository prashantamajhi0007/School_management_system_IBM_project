import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import { classesData, role, subjectsData} from "@/lib/data";

type Subject={
    id:number;
    name:string;
    capacity:number;
    grade:number;
    supervisor:string[];

};

const columns=[
        {
          header: "Class Name",
          accessor: "name"
        },
        {
          header: "Capacity",
          accessor: "capacity",
        },
        {
          header: "Grade",
          accessor: "grade",
          className: "hidden lg:table-cell",
        },
        {
          header: "Supervisor",
          accessor: "supervisor",
          className: "hidden lg:table-cell",
        },
        {
            header:"Actions",
            accessor:"action",
        }
        
    
]

const ClassListPage=()=>{
    const renderRow = (item: Class) => (
      <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.name[0]}</td>
      <td className="hidden md:table-cell">
        {item.supervisor.name + " " + item.supervisor.surname}
      </td>
      <td>
        <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
               < Image src="/view.png" alt="" width={16} height={16} /> 
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
                    All class
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
           <Table columns={columns} renderRow={renderRow} data={classesData} />
            {/* pagination */}
            <Pagination />
        </div>

        </>
    );

    
};

export default  ClassListPage;