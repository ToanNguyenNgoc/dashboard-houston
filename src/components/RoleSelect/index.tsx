import { api } from "@/api";
import { Chip } from "@mui/material";
import { useRef } from "react";
import { useQuery } from "react-query";
import { LoadButton } from "../LoadButton";
import './role-select.scss'

interface RoleSelectType {
  value?: number[],
  setValue?: any
}

export function RoleSelect(props: RoleSelectType) {
  const { value, setValue } = props
  // const [roles, setRoles] = useState<number[]>([])
  const refRole = useRef<HTMLDivElement>(null)
  const { data } = useQuery({
    queryKey: ['SELECT_ROLE'],
    queryFn: () => api.roles({ is_super_admin: false }),
    refetchOnWindowFocus: false
  })
  const onSelectRole = (id: number) => {
    if (setValue) {
      setValue((prev: number[]) => {
        if (prev.includes(id)) {
          return prev.filter((item: number) => item !== id)
        } else {
          return [...prev, id]
        }
      })
    }
  }
  const onDelete = (id: number) => {
    if (setValue) {
      setValue((prev: number[]) => prev.filter((item: number) => item !== id))
    }
  }

  let roleSelected = []
  for (var i = 0; i < data?.data?.length; i++) {
    if (value?.includes(data?.data[i]?.id)) {
      roleSelected.push(data?.data[i])
    }
  }
  const onShowRole = () => {
    refRole.current?.classList.add('role_select_show')
  }
  window.addEventListener('click', () => refRole.current?.classList.remove('role_select_show'))

  return (
    <div className="role_cnt">
      <div
        onClick={(e) => {
          onShowRole(),
            e.stopPropagation()
        }}
        className="form-control form-control-solid"
      >
        {
          roleSelected.map((item: any) => (
            <Chip
              key={item.id}
              label={item.title}
              onDelete={() => onDelete(item.id)}
              size="medium"
              color="primary"
            />
          ))
        }
      </div>
      <div
        ref={refRole}
        onClick={(e) => e.stopPropagation()}
        className="role_select"
      >
        <ul className="role_list">
          {
            data?.data.map((item: any) => (
              <li key={item.id} className="role_item">
                <LoadButton
                  onClick={() => onSelectRole(item.id)}
                  variant="text"
                  title={item.title}
                  color="inherit"
                  size="large"
                  style={value?.includes(item.id) ? { backgroundColor: 'var(--kt-gray-300)' } : {}}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}