import { api } from "@/api";
import { KTSVG } from "@/_metronic/helpers";
import { PageTitle } from "@/_metronic/layout/core";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { CustomSwitch } from "@/components";

function RolesPage() {
  const { data: roles } = useQuery({
    queryKey: ['ROLE_PAGE'],
    queryFn: () => api.roles(),
    refetchOnWindowFocus: false
  })
  return (
    <>
      <PageTitle>Roles</PageTitle>
      <div className={`card `}>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Quyền</span>
          </h3>
          <div className='card-toolbar'>
            <Link to={{ pathname: 'form' }} className='btn btn-sm btn-light-primary'>
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Tạo mới
            </Link>
          </div>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='ps-4 min-w-325px rounded-start'>Tên quyền</th>
                  <th className='min-w-125px'>Ngày tạo</th>
                  <th className='min-w-125px'>Ngày sửa</th>
                  <th className='min-w-200px'>Trạng thái</th>
                  <th className='min-w-150px'>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {
                  roles?.data?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex justify-content-start flex-column'>
                            <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {dayjs(item.created_at).format('DD/MM/YYYY HH:mm')}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {dayjs(item.updated_at).format('DD/MM/YYYY HH:mm')}
                        </span>
                      </td>
                      <td>
                        <CustomSwitch checked={item.status} />
                      </td>
                      <td>
                        <Link to={{ pathname: `form/${item.id}` }} className='badge badge-light-primary fs-7 fw-semobold'>
                          Cấp quyền
                        </Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RolesPage;