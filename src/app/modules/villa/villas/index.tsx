import { PageTitle } from "@/_metronic/layout/core";
import { api } from "@/api";
import { AppContext, AppContextType } from "@/context/AppProvider";
import { useRolesStore } from "@/store/zustand";
import { Avatar, IconButton } from "@mui/material";
import { useContext } from "react";
import { useQuery } from "react-query";
import { formatPrice, stringAvatar } from "@/utils";
import { CustomSwitch, EditIcon, LoadButton } from "@/components";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Villa() {
  const { branch } = useContext(AppContext) as AppContextType
  const [isSPA] = useRolesStore((state: any) => [state.isSPA])
  const navigate = useNavigate()
  let branch_id: any
  if (!isSPA) branch_id = branch?.id
  const { data, isLoading } = useQuery({
    queryKey: ['VILLA_CATE', branch.id],
    queryFn: () => api.villa({ branch_id: branch_id }),
    refetchOnWindowFocus: false
  })
  return (
    <>
      <PageTitle>Villas</PageTitle>
      <div className={`card card-account`}>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            {/* <span className='card-label fw-bold fs-3 mb-1'>Tài khoản</span> */}
          </h3>
          <div className='card-toolbar'>
            <LoadButton
              title="Create new villa"
              onClick={() => navigate('form')}
            />
          </div>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='min-w-60px'>Thumbnail</th>
                  <th className='min-w-250px'>Villa name</th>
                  <th className='min-w-125px'>Category</th>
                  <th className='min-w-125px'>Price</th>
                  <th className='min-w-200px'>Branch</th>
                  <th className='min-w-80px'>Acreage</th>
                  <th className='min-w-100px'>Status</th>
                  <th className='min-w-125px'>Created at</th>
                  <th className='min-w-125px'>Update at</th>
                  <th className='min-w-80px'>Detail</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.data?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          <Avatar
                            {...stringAvatar(item.name)}
                            alt="" src={item.thumbnail?.original_url ?? ''}
                          />
                        </span>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex justify-content-start flex-column'>
                            <span className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                              {item.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {item.villa_cate?.villa_cate_name}
                        </span>
                      </td>
                      <td>
                        {
                          item.special_price < item.price ?
                            <>
                              <span className='text-muted fw-semobold text-muted d-block fs-6'>
                                {formatPrice(item.special_price)}
                              </span>
                              <span className='text-muted text-decoration-line-through fw-semobold text-muted d-block fs-8'>
                                {formatPrice(item.price)}
                              </span>
                            </>
                            :
                            <span className='text-muted fw-semobold text-muted d-block fs-6'>
                              {formatPrice(item.price)}
                            </span>
                        }
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {item.branch?.name}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          {item.acreage && `${item.acreage} m2`}
                        </span>
                      </td>
                      <td>
                        <span className='text-muted fw-semobold text-muted d-block fs-7'>
                          <CustomSwitch checked={item.status} />
                        </span>
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

export default Villa;