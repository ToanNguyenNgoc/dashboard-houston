import { api } from "@/api"
import { unique } from "@/_metronic/utils"
import { Checkbox } from "@mui/material"
import { useQuery } from "react-query"
import './permission-tb.scss'

const renderTile = (permission_path: string) => {
  let title = ''
  if (permission_path.includes('.:id.GET')) return title = 'Find one'
  if (permission_path.includes('.GET')) return title = 'Find all'
  if (permission_path.includes('.POST')) return title = 'Create'
  if (permission_path.includes('.:id.PUT')) return title = 'Update'
  if (permission_path.includes('.:id.DELETE')) return title = 'Delete'
  return title
}

interface PermissionTableType {
  permissions?: number[],
  setPermissions?: React.Dispatch<React.SetStateAction<number[]>>
}

export function PermissionTable(props: PermissionTableType) {
  const { permissions, setPermissions } = props;
  // const [value, setValue] = useState<number[]>([])
  const { data } = useQuery({
    queryKey: ['PERMISSION_CPN'],
    queryFn: () => api.permissions(),
    refetchOnWindowFocus: false
  })
  const path_common = data?.data?.map((per: any) => {
    const path_item = per.permission_path.split('.')[1]
    return { ...per, path: path_item }
  })
  const path_common_unique = unique<string>(path_common?.map((per: any) => per.path))
  const permissionGroup = path_common_unique?.map((path: string) => {
    const group = path_common
      .filter((item: any) => item.path === path)
    return {
      title: path,
      group: group
    }
  })
  const onChangeItem = (id: number) => {
    if (setPermissions) {
      setPermissions((prev: number[]) => {
        if (prev.includes(id)) {
          return prev.filter((item: number) => item !== id)
        } else {
          return [...prev, id]
        }
      })
    }
  }

  return (
    <>
      <div className="permission-cnt">
        <div className="per-header">
          <ul className="list-item">
            <li className="item">Find all</li>
            <li className="item">Create</li>
            <li className="item">Find one</li>
            <li className="item">Update</li>
            <li className="item">Delete</li>
          </ul>
        </div>
        <div className="per-body">
          {
            permissionGroup?.map((item: any, index: number) => (
              <div key={index} className="per-body-item">
                <div className="item-name">
                  {/* <Checkbox color="success" /> */}
                  <span>{item.title}</span>
                </div>
                <ul className="item-check-list">
                  {
                    item.group?.map((permission: any) => (
                      <li key={permission.id} className="item-check">
                        <Checkbox
                          checked={permissions?.includes(permission.id)}
                          onChange={() => onChangeItem(permission.id)}
                          color="success"
                        />
                        <div className="item-hover">{permission.permission_path}</div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}