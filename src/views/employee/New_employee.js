import { CButton, CCol } from '@coreui/react'
import React, { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import WorkInfo from './WorkInfo'
import CIcon from '@coreui/icons-react'
import {cilArrowLeft} from '@coreui/icons'
import { RegisterAction } from '../../actions/Auth'
import { useHistory } from 'react-router-dom'

function New_employee() {

  const history = useHistory()
  // GeneralInfo
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Prenom, setPrenom] = useState('')
  const [Nom, setNom] = useState('')
  const [Adresse, setAdresse] = useState('')
  const [BirthDay, setBirthDay] = useState('')
  const [Tel, setTel] = useState('')
  //    WorkInfo
  const [Office, setOffice] = useState('')
  const [Dep, setDep] = useState('')
  const [Post, setPost] = useState('')
  const [Contrat, setContrat] = useState('')
  const [Report, setReport] = useState('')

  const [Current, setCurrent] = useState(1)
  const Register = () => {
    if (Current == 1)
    {
      setCurrent(2)
      return
    }

    const userData = {
      name: Nom,
      email: Email,
      avatar: '',
      password: Password,
      Prenom: Prenom,
      tel: Tel,
      address: Adresse,
      DateOfBirth: BirthDay,
      office: Office,
      departement: Dep,
      post: Post,
      reportsTo: Report,
      typeContrat: Contrat,
      from: '',
    }
    
    RegisterAction(userData,history)
  }
  return (
    <>
      <div className="new_employer_form">
      {(Current == 1 && (
        <GeneralInfo
          HandleEmail={(text) => setEmail(text)}
          HandlePassword={(text) => setPassword(text)}
          HandlePrenom={(text) => setPrenom(text)}
          HandleNom={(text) => setNom(text)}
          HandleAdresse={(text) => setAdresse(text)}
          HandleBirthday={(text) => setBirthDay(text)}
          HandleTel={(text) => setTel(text)}
          adresseMail={Email}
        />
      )) ||
        (Current == 2 && (
          <WorkInfo
            HandleOffice={(text) => setOffice(text)}
            HandleDep={(text) => setDep(text)}
            HandlePost={(text) => setPost(text)}
            HandleContract={(text) => setContrat(text)}
            HandleReported={(text) => setReport(text)}
          />
        ))}
      </div>

      <CCol className="mt-5 button-form" xs={12}>
        {Current == 2 && (
          <CButton
            className="mr-5"
            onClick={() => setCurrent(1)}
            color="primary"
            type="submit"
          >
            {/* <CIcon icon={cilArrowLeft} customClassName="nav-icon" /> */}
            Retour
          </CButton>
        )}
        <CButton className="Next_btn" onClick={() => Register()} color="primary" type="submit">
        {Current == 1 ? "Suivant" : "Register"}
        </CButton>
      </CCol>
    </>
  )
}

export default New_employee
