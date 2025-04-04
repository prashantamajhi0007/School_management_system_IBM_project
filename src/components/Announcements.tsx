const Announcements=()=>{
    return(
        <>
        <div className="bg-width p-4 round-md">
        <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        
          <div className="bg-lamaSkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Lorem ipsum do</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2026-01-01
              </span>
            </div>
          </div>
          
          <div className="bg-lamaPurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Lorem ipsum do</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2026-01-01
              </span>
            </div>
          </div>
          
          <div className="bg-lamaYellowLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Lorem ipsum do</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2026-01-01
              </span>
            </div>
          </div>
          
          
      </div>
        </div>
        </>
    );

    
};

export default Announcements;