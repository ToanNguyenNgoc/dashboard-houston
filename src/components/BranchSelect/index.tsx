import { api } from '@/api';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { debounce } from 'lodash'
import './branch-select.scss'
import { LoadButton } from '../LoadButton';

export function BranchSelect() {
  const [search, setSearch] = useState('')
  const [branchId, setBranchId] = useState<number | null>(null)
  const { data } = useQuery({
    queryKey: ['BRANCH_SELECT', search],
    queryFn: () => api.branches({ status: true, search: search }),
    refetchOnWindowFocus: false
  })
  const { data: branch } = useQuery({
    queryKey: [branchId],
    queryFn: () => api.branchById(branchId as number),
    refetchOnWindowFocus: false,
    enabled: branchId ? true : false
  })
  const branches = data?.data ?? []

  const debounceSearch = useCallback(
    debounce((text: string) => setSearch(text), 600),
    []
  )
  const onSelectBranch = (id: number) => {
    setBranchId(branchId === id ? null : id)
  }
  console.log(branch)

  return (
    <div>
      <input
        disabled
        value={branch?.data?.name ?? ''}
        onChange={(e) => debounceSearch(e.target.value)}
        type="text" className='form-control form-control-solid'
      />
      BranchSelect
      <ul>
        {
          branches.map((item: any) => (
            <li key={item.id}>
              <LoadButton
                title={item.name}
                onClick={() => onSelectBranch(item.id)}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}