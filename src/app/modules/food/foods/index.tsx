import { PageTitle } from "@/_metronic/layout/core";
import { FoodQr, api } from "@/api";
import { AppContext, AppContextType } from "@/context/AppProvider";
import { useContext } from "react";
import { useQuery } from "react-query";
import "./foods.scss"
import { CustomSwitch, DeleteIcon, EditIcon } from "@/components";
import moment from "moment";
import { IFood } from "@/interface";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Food() {
  const navigate = useNavigate()
  const { branch } = useContext(AppContext) as AppContextType
  const query: FoodQr = {
    branch_id: branch?.id
  }
  const { data } = useQuery({
    queryKey: ['FOODS', query],
    queryFn: () => api.foods(query)
  })
  const foods = data?.data ?? []
  return (
    <>
      <PageTitle>Foods</PageTitle>
      <div className={`card card-account card-villa-cate`}>
        <div className='card-header border-0 pt-5'>
          <div className='card-toolbar'>
            <Button onClick={() => navigate('/foods/form')} variant="contained" >
              Create new food
            </Button>
          </div>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='ps-4 min-w-180px rounded-start'>Image</th>
                  <th className='min-w-120px'>Name</th>
                  <th className='min-w-80px'>Status</th>
                  <th className='min-w-120px'>Description</th>
                  <th className='min-w-120px'>Category</th>
                  <th className='min-w-100px'>Updated at</th>
                  <th className='min-w-100px'>Created at</th>
                  <th className='min-w-80px'></th>
                </tr>
              </thead>
              <tbody>
                {
                  foods.map(item => <Item key={item.id} item={item} />)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;

const Item = ({ item }: { item: IFood }) => {
  const navigate = useNavigate()
  return (
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img className="food-image" src={item.media?.original_url} alt="" />
        </div>
      </td>
      <td>
        <span className='text-dark fw-bold mb-1 fs-7'>
          {item.name}
        </span>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <CustomSwitch />
        </div>
      </td>
      <td>
        <span className='text-muted fw-semobold text-muted d-block fs-7'>
          {item.description}
        </span>
      </td>
      <td>
        <span className='text-muted fw-semobold text-muted d-block fs-7'>
          {item.food_cate?.name}
        </span>
      </td>
      <td>
        <span className='text-muted fw-semobold text-muted d-block fs-8'>
          {moment(item.created_at).format('DD/MM/YYYY HH:mm')}
        </span>
      </td>
      <td>
        <span className='text-muted fw-semobold text-muted d-block fs-8'>
          {moment(item.created_at).format('DD/MM/YYYY HH:mm')}
        </span>
      </td>
      <td>
        <IconButton
          size="small"
          onClick={() => navigate(`/foods/form/${item.id}`)}
          style={{ backgroundColor: 'var(--kt-gray-200)' }}
        >
          <EditIcon color="success" />
        </IconButton>
        <IconButton
          size="small"
          style={{ backgroundColor: 'var(--kt-gray-200)', marginLeft: '8px' }}
        >
          {/* {isLoading ? <SyncIcon color="error" /> : <DeleteIcon color="error" />} */}
          <DeleteIcon color="error" />
        </IconButton>
      </td>
    </tr>
  )
}