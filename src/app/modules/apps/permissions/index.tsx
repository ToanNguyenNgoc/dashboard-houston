import { api, qrKey } from "@/api";
import { PageTitle } from "@/_metronic/layout/core";
import { useQuery } from "react-query";

function PermissionsPage() {
  const { data, error } = useQuery({
    queryKey: [qrKey.permissions_page],
    queryFn: () => api.permissions(),
    refetchOnWindowFocus: false
  })
  console.log(data)
  return (
    <>
      <PageTitle>Permissions</PageTitle>
      {error && <h4>Bạn không có quyền truy cập</h4>}
      <ul>
        {
          data?.data?.map((item: any) => (
            <li key={item.id}>{item.permission_path}</li>
          ))
        }
      </ul>
    </>
  );
}

export default PermissionsPage;