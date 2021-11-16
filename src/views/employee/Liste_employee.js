import {
  CTableDataCell,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSpinner,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GetUsers } from '../../actions/UserActions'
import Alert from "../../components/Alert"
function Liste_employee() {

  const location = useLocation();
  const [isSaved, setisSaved] = useState(false)
  const [DataFiltred, setDataFiltred] = useState([])
  const [Loading, setLoading] = useState(false)
  const Get_all = async () => {
    setLoading(true)
    const res = await GetUsers()
    if (res) {
      setDataFiltred(res)
      setLoading(false)
    }
  }
  useEffect(() => {
    Get_all()
    if(location.state?.userIsSaved)
    setisSaved(true)
  }, [])

  useEffect(() => {
   if(isSaved)
   setTimeout(() => {
     setisSaved(false)
   }, 3000);
  }, [isSaved])

  return (
    <div>
     {isSaved && <Alert text={"employee is saved successfully"}/>}
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col"></CTableHeaderCell>
            <CTableHeaderCell scope="col">Nom & Prenom</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Post</CTableHeaderCell>
            <CTableHeaderCell scope="col">Departement</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {DataFiltred.map((el, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              <CTableDataCell>
                {el.name} {el.lastName}
              </CTableDataCell>
              <CTableDataCell>{el.email}</CTableDataCell>
              <CTableDataCell>{el.post}</CTableDataCell>
              <CTableDataCell>{el.departement}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      {Loading && 
      <div style={{textAlign:'center'}}>
          <CSpinner />
      </div>
      }
    </div>
  )
}

export default Liste_employee
