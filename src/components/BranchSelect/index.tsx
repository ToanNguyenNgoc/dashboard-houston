import { api } from '@/api';
import { useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { debounce } from 'lodash'
import './branch-select.scss'
import { LoadButton } from '../LoadButton';

interface BranchSelect {
  branchId?: number,
  setBranchId?: any
}

export function BranchSelect({ branchId, setBranchId }: BranchSelect) {
  const [search, setSearch] = useState('')
  const refBranch = useRef<HTMLDivElement>(null)
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
    if (setBranchId) {
      setBranchId(branchId === id ? null : id)
    }
  }
  window.addEventListener('click', () => refBranch.current?.classList.remove('branch-show'))
  return (
    <div className='select-cnt'>
      <div
        onClick={(e) => {
          e.stopPropagation()
          refBranch.current?.classList.toggle('branch-show')
        }}
      >
        <input
          disabled
          value={branch?.data?.name ?? ''}
          type="text" className='form-control form-control-solid'
        />
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        ref={refBranch} className="branch-select_cnt"
      >
        <input
          onChange={(e) => debounceSearch(e.target.value)}
          type="text" className='form-control form-control-solid' placeholder='Search...'
        />
        <div className="list-cnt">
          <ul>
            {
              branches.map((item: any) => (
                <li key={item.id}>
                  <LoadButton
                    style={item.id === branchId ? {backgroundColor:'var(--kt-gray-300)'}:{}}
                    title={item.name}
                    variant="text"
                    color="inherit"
                    size="large"
                    onClick={() => onSelectBranch(item.id)}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}