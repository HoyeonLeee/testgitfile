import React, { useState } from 'react';
import InputField from './InputField';

const MemberForm = ({ addMember }) => {
    const [memberTitle, setMemberTitle] = useState('');
    const [memberYear, setMemberYear] = useState('');
    const [memberId, setMemberId] = useState('');
    const [memberPw, setMemberPw] = useState('');
    const [memberRePw, setMemberRePW] = useState('');
    const [memberCpf, setMemberCpf] = useState('');

    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    const [idError, setIdError] = useState('');
    const [pwError, setPwError] = useState('');
    const [repwError, setRePweError] = useState('');
    const [cpfError, setCpfError] = useState('');

  
    const resetForm = () => {
        setMemberTitle('');
        setMemberYear('');
        setMemberId('');
        setMemberPw('');
        setMemberRePW('');
        setMemberCpf('');
    };

    const validateForm = () => {
      resetErrors(); 
      let validated = true;      
      if (!memberTitle) {
        setTitleError('Punt your name');
        validated = false;
      }

      if (!memberYear) {
        setYearError('Put your Email');
        validated = false;
      }

      
      if (!memberId) {
        setIdError('Put your id');
        validated = false;
      }

      
      if (!memberPw) {
        setPwError('Put your pw');
        validated = false;
      }

      
      if (!memberRePw) {
        setRePweError('Put your repw');
        validated = false;
      }

      
      if (!memberCpf) {
        setCpfError('Put your cpf');
        validated = false;
      }

      return validated;
    };

    const resetErrors = () => {
      setTitleError('');
      setYearError('');
      setIdError('');
      setPwError('');
      setRePweError('');
      setCpfError('');
    };

    const onSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        addMember({
          id: Date.now(),
          title: memberTitle,
          year: memberYear,
          memberid: memberId,
          memberpw: memberPw,
          memberrepw: memberRePw,
          membercpf: memberCpf
        });
        resetErrors();
        resetForm();
      }
    };

    
    return (
    <form onSubmit={onSubmit}>
        <InputField 
          type="text"
          value={memberTitle}
          placeholder="Name"
          onChange={e => setMemberTitle(e.target.value)}
          errorMessage={titleError}
        />
        <InputField 
          type="text"
          value={memberYear}
          placeholder="Email"
          onChange={e => setMemberYear(e.target.value)}
          errorMessage={yearError}
        />
        <InputField 
          type="text"
          value={memberId}
          placeholder="ID"
          onChange={e => setMemberId(e.target.value)}
          errorMessage={idError}
        />
        <InputField 
          type="text"
          value={memberPw}
          placeholder="PW"
          onChange={e => setMemberPw(e.target.value)}
          errorMessage={pwError}
        />
        <InputField 
          type="text"
          value={memberRePw}
          placeholder="RePw"
          onChange={e => setMemberRePW(e.target.value)}
          errorMessage={repwError}
        />
        <InputField 
          type="text"
          value={memberCpf}
          placeholder="CPF"
          onChange={e => setMemberCpf(e.target.value)}
          errorMessage={cpfError}
        />
        <button type="submit">Add</button>
    </form>
    );
};

export default MemberForm;