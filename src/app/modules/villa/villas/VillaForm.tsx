import { PageTitle } from "@/_metronic/layout/core";
import { api } from "@/api";
import { useQuery } from "react-query";
import { Params, useParams } from "react-router-dom";

interface IParams extends Params {
  id?: string
}

function VillaForm() {
  const params: IParams = useParams()
  let method = 'POST'
  if (params.id) method = 'PUT'
  const { data } = useQuery({
    queryKey: ['VILLA_ID', params.id],
    queryFn: () => api.villaById(params.id ?? 0, { includes: 'category|branch|full_address' }),
    enabled: params.id ? true : false,
    refetchOnWindowFocus: false
  })
  return (
    <>
      <PageTitle>{params.id ? 'Update villa' : 'Create new villa'}</PageTitle>
    </>
  );
}

export default VillaForm;