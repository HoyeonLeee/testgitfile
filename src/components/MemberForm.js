import React, { useState } from 'react';
import InputField from './InputField';

const MemberForm = ({ addMember }) => {
    const [memberTitle, setMemberTitle] = useState('');
    const [memberYear, setMemberYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
  
    const resetForm = () => {
        setMemberTitle('');
        setMemberYear('');
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

      return validated;
    };

    const resetErrors = () => {
      setTitleError('');
      setYearError('');
    };

    const onSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        addMember({
          id: Date.now(),
          title: memberTitle,
          year: memberYear,
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
        <button type="submit">Add</button>
    </form>
    );
};

export default MemberForm;