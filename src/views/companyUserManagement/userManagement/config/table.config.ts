export const tableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  selectColumnAlign: 'center',
  indexColumnLabel: '#',
  propList: [
    {
      prop: 'name',
      label: '姓名',
      minWith: '100',
      slotName: 'name'
    },
    {
      prop: 'address',
      label: '地址',
      minWith: '100'
    },
    {
      prop: 'date',
      label: '时间123',
      minWith: '100',
      slotName: 'date'
    },
    {
      label: '操作',
      minWith: '100',
      slotName: 'action'
    }
  ]
}
