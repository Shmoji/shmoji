import { getHealthResults } from "actions/health/getHealthResults"
import A from "components/A"
import DefaultLayout from "components/layouts/DefaultLayout"
import { Searchbar } from "components/Searchbar"
import { HealthResult } from "modules/health/utils/HealthTypes"
import moment from "moment"
import { useInfiniteQuery } from "react-query"
import { useState } from 'react'

const ROWS_PER_PAGE = 10

const infiniteQueryConfig = {
  getNextPageParam: (lastGroup: any, allGroups: any) => {
    const morePagesExist = lastGroup?.length === ROWS_PER_PAGE

    if (!morePagesExist) {
      return false
    }

    return allGroups.length * ROWS_PER_PAGE
  },
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  enabled: true,
  keepPreviousData: true,
}

const HealthData = () => {
  const [dataSearch, setDataSearch] = useState('')
  
  const {
    data: infiniteResultsData,
    isFetching: isResultsDataLoading,
    fetchNextPage: fetchMoreResults,
    refetch: refetchResults,
    hasNextPage: canFetchMoreResults,
  } = useInfiniteQuery(
    ['results', dataSearch],
    ({ pageParam = 0 }) => getHealthResults({
      skip: pageParam,
      limit: ROWS_PER_PAGE,
      search: dataSearch
    }),
    infiniteQueryConfig
  )

  const allResults = infiniteResultsData?.pages[0] || []

  return (
    <div className="flex flex-col items-center">

      <div className="flex items-center mb-4 text-gray-300">
        <A href="/" className="text-blue-600 mr-1">home</A> / <A href="/health" className="text-blue-600 mr-1 ml-1">health</A> / <div className="ml-1">data</div>
      </div>

      <div className="text-4xl font-bold mb-4">Health Data</div>

      <div className="w-full flex flex-col justify-center items-center space-y-6">
        
        <div className="font-bold italic">This is all data from bloodwork, scans, and other measurement tools.</div>

        <div>
          <Searchbar onNameSearchChanged={setDataSearch} />
        </div>

        <div className="w-full pb-40 max-w-7xl mx-auto px-4">

          {/* Table header */}
          <div className="flex space-x-4 pb-8 mb-8 border-b border-white">

            <div className="w-[20%] font-bold">Name</div>
            <div className="w-[10%] font-bold">Value</div>
            <div className="w-[10%] font-bold">Range</div>
            <div className="w-[10%] font-bold">Resulted On</div>
            <div className="w-[25%] font-bold">Doctor Comments</div>
            <div className="w-[25%] font-bold">Shmoji Comments</div>

          </div>

          <div className="flex flex-col">
            {allResults && allResults?.length > 0 && allResults.map((result: HealthResult, rInd: number) => {
              return (
                <div className="flex space-x-4 pb-8 mb-8 border-b border-white" key={rInd}>
                  
                  <div className="w-[20%]">{result.name}</div>
                  <div className="w-[10%]">{result.value}</div>
                  <div className="w-[10%]">{result.range}</div>
                  <div className="w-[10%]">{moment(result.resultedDate).format("MM/DD/YYYY")}</div>
                  <div
                    className="w-[25%] whitespace-pre-wrap break-words"
                    style={{ wordBreak: 'break-word' }} // Fixes overflow issue on browsers that dont support break-words above
                  >
                    {result.doctorComments}
                  </div>
                  <div
                    className="w-[25%] whitespace-pre-wrap break-words"
                    style={{ wordBreak: 'break-word' }} // Fixes overflow issue on browsers that dont support break-words above
                  >
                    {result.shmojiComments}
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </div>
  )
}

HealthData.layoutProps = {
  Layout: DefaultLayout,
}

export default HealthData
