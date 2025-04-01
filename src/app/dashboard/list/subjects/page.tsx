import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import { role, subjectsData} from "@/lib/data";

type Subject={
    id:number;
    name:string;
    teachers:string[];

};

const columns=[
        {
          header: "Subject Name",
          accessor: "name"
        },
        {
          header: "Teachers",
          accessor: "teachers",
          className: "hidden lg:table-cell",
        },
        {
            header:"Actions",
            accessor:"action",
        }
        
    
]

const SubjectListPage=()=>{
    const renderRow = (item: Subject) => (
        <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
        
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.teachers.join(",")}</p>
          </div>
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
           <Table columns={columns} renderRow={renderRow} data={subjectsData} />
            {/* pagination */}
            <Pagination />
        </div>

        </>
    );

    
};

export default SubjectListPage;