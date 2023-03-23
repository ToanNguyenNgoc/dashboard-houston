import { api } from "@/api";
import { CustomSwitch, EditIcon } from "@/components";
import { KTSVG } from "@/_metronic/helpers";
import { PageTitle } from "@/_metronic/layout/core";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import './style.scss'
import { IconButton } from "@mui/material";

function Account() {
  const navigate = useNavigate()
  const { data } = useQuery({
    queryKey: ['PAGE_ACCOUNTS'],
    queryFn: () => api.accounts(),
    refetchOnWindowFocus: false
  })
  return (
    <>
      <PageTitle>Accounts</PageTitle>
      <div className={`card card-account`}>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            {/* <span className='card-label fw-bold fs-3 mb-1'>Tài khoản</span> */}
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
                  <th className='ps-4 min-w-200px rounded-start'>Fullname</th>
                  <th className='min-w-125px'>Email</th>
                  <th className='min-w-125px'>Telephone</th>
                  <th className='min-w-200px'>Roles</th>
                  <th className='min-w-125px'>Created at</th>
                  <th className='min-w-125px'>Update at</th>
                  <th className='min-w-100px'>Status</th>
                  <th className='min-w-80px'>Detail</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.data?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex justify-content-start flex-column'>
                            <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                              {item.fullname}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {item.email}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {item.telephone}
                        </span>
                      </td>
                      <td>
                        {
                          item.roles?.map((role: any, i: number) => (
                            <span key={i} className="badge badge-success role-item">{role.title}</span>
                          ))
                        }
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
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          <CustomSwitch checked={item.status} />
                        </span>
                      </td>
                      <td>
                        <IconButton
                          size="medium"
                          style={{ backgroundColor: 'var(--kt-gray-200)' }}
                          onClick={() => navigate(`form/${item.id}`)}
                        >
                          <EditIcon color="success" />
                        </IconButton>
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

export default Account;